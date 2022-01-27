import React from 'react';

type ResetType = {
    resetCounter : (finishNumber: number) => void
    start: number
}

const Reset: React.FC<ResetType> = (props) => {
    return (
        <div>
            <button className="button" onClick={() => props.resetCounter(0)} disabled={props.start === 0}>RESET</button>
        </div>
    )
}
export default Reset;