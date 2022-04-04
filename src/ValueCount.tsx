import React, {FC} from "react";
import "./App.css";

type InputPropsType = {
    count: number
    numberMax: number
    numberMin: number
}
export const ValueCount: FC<InputPropsType> = ({count, numberMax, numberMin}) => {
    return (
        <div className={"title"}>

            <h1 className={count === numberMax ? "titleTitle" : ""}>

                {numberMin > numberMax ? "error" : numberMin < 0 ?
                    "value is not valid"  : count}

            </h1>
        </div>
    );
};
