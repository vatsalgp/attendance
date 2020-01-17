import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onChangeInput = (event) => {
        event.preventDefault();
        this.setState({ term: event.target.value });
        this.props.onSubmit(event.target.value);
    }

    render() {
        return (
            <div>
                <form className="ui form " onSubmit={e => e.preventDefault()} >
                    <div className="field">
                        <label htmlFor="input">{this.props.label}: </label>
                        <input
                            min={this.props.min}
                            max={this.props.max}
                            type={this.props.type}
                            value={this.state.term}
                            onChange={this.onChangeInput}
                        />
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;