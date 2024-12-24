import ProgressBar from '../progress/ProgressBar';
import './Quitzes.css';

function Quitzes({question, onClickVariant, questions, step})
{
    const percent = Math.round((step)/(questions.length-1)*100);
    return(
        <div className="content">
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map
                    (
                        (text, index) => <li key={index} onClick={() => onClickVariant(index)}>
                            {text}
                        </li>
                    )
                }
            </ul>
            <ProgressBar percent={percent}/>
        </div>
    )
}
export default Quitzes;