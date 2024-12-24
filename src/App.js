import {useState} from 'react';
import Quitzes from './components/quitzes/Quitzes';
//import logo from './logo.svg';
import './App.css';

const questions = 
[
  {
    title: 'Что такое переменная?',
    variants: ['Место на диске', 'Часть процессора', 'Именованная область памяти'],
    correct: 2
  },
  {
    title: 'Что такое if?',
    variants: ['Оператор', 'Функция', 'Управляющая структура'],
    correct: 2
  },
  {
    title: 'Что такое оператор?',
    variants: ['Функция', 'Переменная', 'Управляющая структура'],
    correct: 0
  },
  {
    title: 'Что такое указатель?',
    variants: ['Знак на дороге', 'Знак в здании', 'Переменная, которая содержит адрес'],
    correct: 2
  }
]

function App() {
  const[step,setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = (variant) =>
    {
      setStep(step+1);
    } 

  return (
    <div className="main">
      <Quitzes question={question} onClickVariant={onClickVariant}/>
    </div>
  );
}

export default App;
