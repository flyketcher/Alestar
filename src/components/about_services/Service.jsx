import { useState } from 'react';
import '../../App.css'
function Service({title,children}){
    const [activeState,setActiveState] = useState(false);
    return(
        <>
            <button className="description-button" onClick={()=>setActiveState(!activeState)}>{title}</button>
            <div className={activeState?'description active':'description'}>
                {children}
            </div>
        </>
    )
}
export default Service