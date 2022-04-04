import React, {ChangeEvent, useState} from "react";
import "./App.css";
import {Table} from "./Table";
import {Instaler} from "./Instaler";

function App() {

    let [numberMax, setNumberMax] = useState(0)
    let [numberMin, setNumberMin] = useState(0)
    let [count, setCount] = useState(numberMin);

    console.log(numberMax)
    console.log(numberMin)
    const changeMaxValue = (e: number) => {
        setNumberMax(e)
    }
    const changeMinValue = (e: number) => {
        setNumberMin(e)
    }

    const instaler = ()=>{
        setCount(numberMin)
    }

    const inc = () => {
        //CurrentState=>NextState
        setCount(state => state + 1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="App">

            {/*<h2 className={"hhh"}>Independent work</h2>*/}
            <Table count={count} inc={inc} reset={reset}/>
            <Instaler
                instaler={instaler}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                numberMax={numberMax}
                numberMin={numberMin}

            />

        </div>
    );
}

export default App;
