import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter";
import {Instaler} from "./Instaler";

function App() {

    let numberMinValue: number = JSON.parse(sessionStorage.getItem("minValue") || "0")
    let numberMaxValue: number = JSON.parse(sessionStorage.getItem("maxValue") || "0")

    let [numberMin, setNumberMin] = useState<number>(numberMinValue)
    let [numberMax, setNumberMax] = useState<number>(numberMaxValue)

    let [count, setCount] = useState<number>(numberMin);

    useEffect(() => {
        setCount(numberMinValue)
    }, [numberMinValue])

    useEffect(() => {
        setNumberMin(numberMinValue)
        setNumberMax(numberMaxValue)
    }, [numberMinValue, numberMaxValue])

    const changeMaxValue = (e: number) => {
        setNumberMax(e)
    }
    const changeMinValue = (e: number) => {
        setNumberMin(e)
    }

    const instaler = () => {
        sessionStorage.setItem('minValue', JSON.stringify(numberMin))
        sessionStorage.setItem('maxValue', JSON.stringify(numberMax))
        setNumberMin(numberMinValue)
        setNumberMax(numberMaxValue)
        setCount(numberMinValue)
    }

    const increment = () => {
        setCount(c => c + 1);
    }
    const reset = () => {
        setCount(numberMinValue)
    }
    return (
        <div className="App">
            <div className={"one"}>
                <h2 className={"hhh"}>Independent work</h2>
            </div>
            <div className={"two"}>
                <Instaler
                    instaler={instaler}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                    numberMax={numberMax}
                    numberMin={numberMin}
                />
                <Counter count={count} inc={increment} res={reset} numberMax={numberMax}
                         numberMin={numberMin}/>
            </div>
        </div>
    );
}

export default App;
