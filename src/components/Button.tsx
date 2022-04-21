import React, {FC} from "react";
import "../App.css";

type ButtonTypeProps = {
    title: string
    callback: () => void
    isDisabled?: boolean
}

export const Button: FC<ButtonTypeProps> = ({title, callback, isDisabled}) => {

    return (
        <button
            disabled={isDisabled}
            className={"btn"}
            onClick={callback}>
            {title}
        </button>
    );
};
