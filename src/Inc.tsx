import React from 'react';

type IncType = {
    changeNumber: (startNumber: number) => void
    start: number
}

const Inc: React.FC<IncType> = (props) => {
    return (
        <div>
            <button className="button" onClick={() => props.changeNumber(props.start)} disabled={props.start > 4}>INC</button>
        </div>
    )
}
export default Inc;