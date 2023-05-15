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
    {
      "data_type": "string",
      "label": "Описание",
      "element": {
        "type": "textarea"
      }
    },
    {
      "data_type": "string",
      "label": "Цена",
      "element": {
        "type": "input"
      }
    },
    {
      "data_type": "array",
      "label": "Данные о ТО",
      "element": {
        "type": "checkbox"
      },
      "values": [
        {
          "value": 1,
          "label": "Есть сервисная книжка"
        },
        {
          "value": 2,
          "label": "Обслуживался у дилера"
        },
        {
          "value": 3,
          "label": "На гарантии"
        }
      ]
    },
    {
      "data_type": "integer",
      "label": "Способ связи",
      "element": {
        "type": "radio"
      },
      "values": [
        {
          "value": 1,
          "label": "По телефону и в сообщениях"
        },
        {
          "value": 2,
          "label": "По телефону"
        }
      ]
    }
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
