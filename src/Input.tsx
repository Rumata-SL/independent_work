import React, {FC} from "react";
import "./App.css";

type InputPropsType = {
    count?: number
}
export const Input: FC<InputPropsType> = ({count}) => {
    return (
        <div className={"title"}>
            <h1 className={count === 5 ? "titleTitle" : ""}>{count}</h1>
        </div>
    );
};
