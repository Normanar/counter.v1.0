import React, {useState} from 'react';
import './App.css';
import Display from "./Display";
import Inc from "./Inc";
import Reset from "./Reset";


function App() {
    const [start, setStart] = useState<number>(0)
    const changeNumber = (startNumber: number) => setStart(startNumber + 1)
    const resetCounter = (finishNumber: number) => setStart(finishNumber)

    return (
        <div className="App">
            <Display start={start}/>
            <div className="button-main">
                <Inc changeNumber={changeNumber} start={start}/>
                <Reset resetCounter={resetCounter} start={start}/>
            </div>
        </div>
    );
}

export default App;
