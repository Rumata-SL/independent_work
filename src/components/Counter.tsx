import React, {FC} from "react";
import "../App.css";
import {Button} from "./Button";
import {ValueCount} from "./ValueCount";

type TablePropsType = {
    count: number
    inc: () => void
    res: () => void
    numberMax: number
    numberMin: number
}


export const Counter: FC<TablePropsType> = ({count, inc, res, numberMax, numberMin}) => {

    const incHandler = ()=>{
        inc()
    }
    const resetHandler=()=>{
        res()
    }
    return (
        <div className={"table"}>
            <ValueCount count={count} numberMax={numberMax} numberMin={numberMin}/>
            <div className={"containerBtn"}>
                <Button title={"INC"} callback={incHandler} isDisabled={count === numberMax}/>
                <Button title={"RES"} callback={resetHandler} isDisabled={count === numberMin}/>
            </div>
        </div>
    );
};
