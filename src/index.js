import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h1>Attendance</h1>
                <Form />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector("#root"));