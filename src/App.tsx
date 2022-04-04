import React, {ChangeEvent, useState} from "react";
import "./App.css";
import {Table} from "./Table";
import {Instaler} from "./Instaler";

function App() {

    let [numberMax, setNumberMax] = useState("0")
    let [numberMin, setNumberMin] = useState("0")
    let [count, setCount] = useState(0);

    console.log(numberMax)
    console.log(numberMin)
    const changeMaxValue = (e: string) => {
        setNumberMax(e)
    }
    const changeMinValue = (e: string) => {
        setNumberMin(e)
    }

    const instaler = ()=>{

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

            />

        </div>
    );
}

export default App;
