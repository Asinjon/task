import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form/Form';

function App() {
  
  const [fields, setFields] = useState([
    {
      "data_type": "integer",
      "label": "Вид объявления",
      "element": {
        "type": "select"
      },
      "values": [
        {
          "value": 1,
          "label": "Продаю личный автомобиль"
        },
        {
          "value": 2,
          "label": "Автомобиль приобретён на продажу"
        }
      ]
    },
  ]);

  useEffect(() => {
    axios.get('http://api.somewhere.ru')
      .then(response => {
        setFields(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      })
  }, []);

  return (
    <div className="App">
      <Form fields={fields}></Form>
    </div>
  );
}

export default App;
