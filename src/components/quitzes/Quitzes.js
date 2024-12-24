
function Quitzes({question, onClickVariant})
{
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
        </div>
    )
}
export default Quitzes;