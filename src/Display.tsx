import React from 'react';


type DisplayType = {
    start: number
}


const Display: React.FC<DisplayType> = (props) => {
    return (
        <div className="display">
            <h1 className={props.start === 5 ? "limit" : "nolimit"}>{props.start}</h1>
        </div>
    )
}
export default Display;