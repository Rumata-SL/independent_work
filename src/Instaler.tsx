import React, {ChangeEvent, FC, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import "./App.css";

type InstalerPropsType = {
    numberMax: number
    numberMin: number
    instaler: () => void
    changeMaxValue: (e: number) => void
    changeMinValue: (e: number) => void
}

export const Instaler: FC<InstalerPropsType> = (
    {
                    instaler,
                    changeMaxValue,
                    changeMinValue,
                    numberMax,
                    numberMin
                                                }
                                                ) => {

    function onchangeMaxHandler(e: ChangeEvent<HTMLInputElement>) {
        let counterMaxNumber = +e.currentTarget.value
        changeMaxValue(counterMaxNumber)
    }

    function onchangeMinHandler(e: ChangeEvent<HTMLInputElement>) {
        let counterMinNumber = +e.currentTarget.value;
        console.log(typeof counterMinNumber)
        changeMinValue(counterMinNumber)
    }

    return (
        <div className={"table"}>
            {
                numberMin > numberMax ? <h5 style={{color: "red"}}>error</h5> : null
            }

            {/*<h5 style={{color:"red"}}>error</h5>*/}
            <span style={{color: "#fff"}}> max value <input
                onChange={onchangeMaxHandler}
                type="number"/>
            </span>
            <span style={{color: "#fff"}}> min value <input
                onChange={onchangeMinHandler}
                type="number"/>
            </span>
            <div className={"containerBtn"}>
                <Button title={"SET"} callback={instaler}/>
                {/*<button onClick={instaler}>set</button>*/}
            </div>
        </div>
    )
};
