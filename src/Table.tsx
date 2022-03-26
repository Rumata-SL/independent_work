import React, {FC} from "react";
import "./App.css";
import {Button} from "./Button";
import {Input} from "./Input";

type TablePropsType = {
    count: number
    inc: () => void
    reset: () => void
}

export const Table: FC<TablePropsType> = ({count, inc, reset}) => {
    return (
        <div className={"table"}>
            <Input count={count}/>
            <div className={"containerBtn"}>
                <Button title={"inc"} callback={inc} isDisabled={count === 5}/>
                <Button title={"reset"} callback={reset} isDisabled={count === 0}/>
            </div>
        </div>
    );
};
