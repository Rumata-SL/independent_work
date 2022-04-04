import React, {ChangeEvent, FC} from "react";
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
    }) => {

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
            <div className={`${"title"} ${"titleInstal"} `}>
                {/*{*/}
                {/*    numberMin > numberMax ? <h5 style={{color: "red"}}>error</h5> : null*/}
                {/*}*/}

                <span> max value : <input
                    className={numberMax < 0 ? "errorInput" : ""}
                    onChange={onchangeMaxHandler}
                    type="number"/>
            </span>
                <span> min value : <input
                    className={numberMin < 0 ? "errorInput" : ""}
                    onChange={onchangeMinHandler}
                    type="number"/>
            </span>
            </div>

            <div className={"containerBtn"}>
                <Button title={"SET"} callback={instaler} isDisabled={numberMin < 0 || numberMax < numberMin}/>

            </div>
        </div>
    )
};
