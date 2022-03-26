import React, {useState} from "react";
import "./App.css";
import {Table} from "./Table";

function App() {
    const [count, setCount] = useState(0);

    const inc = () => {
        //CurrentState=>NextState
        setCount(state => state + 1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="App">
            <h2 className={"hhh"}>Independent work</h2>
            <Table count={count} inc={inc} reset={reset}/>

        </div>
    );
}

export default App;
