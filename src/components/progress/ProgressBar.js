import './ProgressBar.css';

function ProgressBar({percent})
{
    const getColor = () =>
    {       
      if (percent === 25) return "#FF8C00"; // DarkOrange цвет для 25% 
      else if (percent <= 50) return "#FFA07A"; // LightSalmon цвет для 50% 
      else if (percent <= 75) return "#FFD700"; // Gold цвет для 75% 
      else return "#2E8B57"; // SeaGreen цвет для 100%
        
    }
    // Добавим вывод в консоль для отладки 
    console.log(`Процент: ${percent}, Цвет: ${getColor()}`);

    return(
       <div className='progress-bar'>
         <div className='progress-bar-fill' style={{width:`${percent}%`, background: getColor()}}></div>
       </div>
    )
}
export default ProgressBar;