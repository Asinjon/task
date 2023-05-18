import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form/Form';

function App() {
  
  const [form, setForm] = useState({
    "fields": [
      {
        id: 1,
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
        id: 2,
        "data_type": "string",
        "label": "Описание",
        "element": {
          "type": "textarea"
        }
      },
      {
        id: 3,
        "data_type": "integer",
        "label": "Цена",
        "element": {
          "type": "input"
        }
      },
      {
        id: 4,
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
        id: 5,
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
    ],
    "form": {
      "fieldsets": [
        {
          "label": "Технические характеристики",
          "position": 1,
          "fields": [
            {
              "id": 1,
              "position": 1
            },
            {
              "id": 4,
              "position": 3
            },
            {
              "id": 5,
              "position": 5
            },
          ]
        },
        {
          "label": "История эксплуатации и состояние",
          "position": 2,
          "fields": [
            {
              "id": 2,
              "position": 1
            },
            {
              "id": 3,
              "position": 2
            },
            {
              "id": 1,
              "position": 4
            }
          ]
        }
      ]
    }
  });

  useEffect(() => {
    axios.get('http://api.somewhere.ru')
      .then(response => {
        setForm(response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      })
  }, []);

  return (
    <div className="App">
      <Form form={form}></Form>
    </div>
  );
}

export default App;
