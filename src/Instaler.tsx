import React, {ChangeEvent, FC} from "react";
import {Button} from "./components/Button";
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

    const onchangeMaxHandler=(e: ChangeEvent<HTMLInputElement>) =>{
        let counterMaxNumber = +e.currentTarget.value
        changeMaxValue(counterMaxNumber)
    }

    const onchangeMinHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        let counterMinNumber = +e.currentTarget.value;
        changeMinValue(counterMinNumber)
    }

    return (
        <div className={"table"}>
            <div className={`${"title"} ${"titleInstal"} `}>
                {/*{*/}
                {/*    numberMin > numberMax ? <h5 style={{color: "red"}}>error</h5> : null*/}
                {/*}*/}

                <span> max value : <input
                    className={numberMax < 0 || numberMax === numberMin? "errorInput"  : ""}
                    onChange={onchangeMaxHandler}
                    type="number" value={numberMax}/>
            </span>
                <span> min value : <input
                    className={numberMin < 0  || numberMax === numberMin ? "errorInput" : ""}
                    onChange={onchangeMinHandler}
                    type="number" value={numberMin}/>
            </span>
            </div>

            <div className={"containerBtn"}>
                <Button
                    title={"SET"}
                    callback={instaler}
                    isDisabled={numberMin < 0 || numberMax < numberMin || numberMax === numberMin }

                />

            </div>
        </div>
    )
};
