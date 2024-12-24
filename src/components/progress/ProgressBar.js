import './ProgressBar.css';

function ProgressBar({percent})
{
    const getColor = () =>
    {
        // let color ="";
        // if(percent < 20) color ="#FF0000" 
        // else if(percent < 70) color = "#ffa500"
        // else color = "#2ecc71";
        // return color;
        
        if(percent < 40) return "#FF0000" 
        else if(percent < 70) return "#ffa500"   
        else return "#2ecc71";
        
    }
    return(
       <div className='progress-bar'>
         <div className='progress-bar-fill' style={{width:`${percent}%`, background: getColor()}}></div>
       </div>
    )
}
export default ProgressBar;