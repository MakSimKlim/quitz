import './Result.css';

function Result({correct, questions})
{
    return(
        <div>
            <p className='text'>Вы правильно ответили на {correct} вопросов из {questions}.</p>
            <p className='text'>Количество неправильных ответов: {questions-correct}.</p>
            <a href="/" className='btn'>Попробовать еще раз</a>
        </div>
    )
}
export default Result;