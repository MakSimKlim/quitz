import { useState } from 'react';
import Quitzes from './components/quitzes/Quitzes';
//import Result from './components/result/Result';
//import logo from './logo.svg';
import './App.css';
//import ProgressBar from './components/progress/ProgressBar';

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
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);


  const onClickVariant = (variant) => {
    // console.log("=================================");
    // console.log(`step:${step}`);
    // console.log(`questions:${questions.length}`);
    // console.log(`condition:${step !== questions.length - 1}`);
    // console.log(`correct:${correct}`);
    // console.log(questions[step]);
    // console.log("=================================");
    if (step < questions.length) {
      setStep(step + 1);
    }
    if (variant === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <>
      <div className="main">
        {

         // step !== questions.length ?
            <Quitzes question={question}
              onClickVariant={onClickVariant}
              questions={questions}
              step={step}
              correct={correct}// Передаём количество правильных ответов               
            />
            //:<Result correct={correct} questions={questions.length} />
        }
      </div>
    </>
  );
}

export default App;
