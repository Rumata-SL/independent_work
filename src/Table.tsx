import React, {FC} from "react";
import "./App.css";
import {Button} from "./Button";
import {ValueCount} from "./ValueCount";

type TablePropsType = {
    count: number
    inc: () => void
    reset: () => void
    numberMax: number
    numberMin: number
}

export const Table: FC<TablePropsType> = ({count, inc, reset, numberMax, numberMin}) => {
    return (
        <div className={"table"}>
            <ValueCount count={count} numberMax={numberMax} numberMin={numberMin}/>
            <div className={"containerBtn"}>
                <Button title={"INC"} callback={inc} isDisabled={count === numberMax}/>
                <Button title={"RESET"} callback={reset} isDisabled={count === numberMin}/>
            </div>
        </div>
    );
};
