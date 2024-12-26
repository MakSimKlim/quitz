import ProgressBar from '../progress/ProgressBar';
import Result from '../result/Result';
import './Quitzes.css';

function Quitzes({question, onClickVariant, questions, step, correct})
{
    const percent = Math.round((step)/(questions.length)*100);
    //const incorrect = step - correct; // Вычисляем количество неправильных ответов для отображения в той же форме что и вопросы викторины

    console.log("=================================");
    console.log(`step:${step}`);
    console.log(`questions:${questions.length}`);
    console.log(`condition:${step < questions.length - 1}`);
    console.log(`correct:${correct}`);
    console.log(questions[step]);
    console.log("=================================");
    return(
        <div className="content">
            <h3>{step<questions.length ? question.title : "Finish"}</h3>
            <ul>
                {
                    step < questions.length ?
                    question.variants.map
                    (
                        (text, index) => <li key={index} onClick={() => onClickVariant(index)}>
                            {text}
                        </li>
                    )
                    :<Result correct={correct} questions={questions.length} />
                }
            </ul>
            <ProgressBar percent={percent}/>

            {/* Для отображения результатов ответов нв вопросы викторины в той же форме что и вопросы викторины
             <p>Верные ответы: {correct}</p> 
            <p>Неверные ответы: {incorrect}</p> */}

        </div>
    )
}
export default Quitzes;