import React from "react";
import SearchBar from "./SearchBar";
import "./Form.css";

class Form extends React.Component {
    state = {
        enrollmentNumber: null,
        semNumber: null,
        date: ""
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <SearchBar
                    label="Enrollment Number"
                    type="number"
                    onSubmit={e => this.setState({ enrollmentNumber: e })}
                />
                <SearchBar
                    label="Semester Number"
                    type="number"
                    min="1"
                    max="8"
                    onSubmit={e => this.setState({ semNumber: e })}
                />
                <SearchBar
                    label="Date"
                    type="date"
                    onSubmit={e => this.setState({ date: e })}
                />
                <button className="ui segment" onClick={() => console.log(this.state)}>Submit</button>
            </div >
        );
    }
}

export default Form;