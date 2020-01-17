import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";
import "./index.css";

class App extends React.Component {

    state = { submit: false };

    onSubmit = (o) => {
        let submit = o.enrollmentNumber && o.semNumber && o.date;

        if (submit)
            submit = o.semNumber > 0 && o.semNumber < 9;

        this.setState({ submit });

    }
    renderContent = () => {
        if (!this.state.submit) {
            return (
                <div >
                    <Form onSubmit={this.onSubmit} />
                </div>
            );
        }
        else {
            return (
                <div >

                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui container">
                <h1>Attendance</h1>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector("#root"));