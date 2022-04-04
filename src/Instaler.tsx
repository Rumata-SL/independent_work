import React, {ChangeEvent, FC, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import "./App.css";

type InstalerPropsType = {
    instaler: () => void
    changeMaxValue: (e: string) => void
    changeMinValue: (e: string) => void
}

export const Instaler: FC<InstalerPropsType> = ({instaler, changeMaxValue,changeMinValue}) => {

    const onchangeMaxHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        changeMaxValue((e.currentTarget.value))
    }
    const onchangeMinHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(typeof (e.currentTarget.value))
        changeMinValue(e.currentTarget.value)
    }

    return (
        <div className={"table"}>
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
