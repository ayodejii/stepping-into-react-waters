import React, { Component } from 'react';
class Counter extends Component {
    state = {
        id: this.props.id,
        value: this.props.value,
        imageUrl: "~/ESS.png",
        animals: [
            "dog", "cat", "goat"
        ]
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    /** Increment this.state.value by 1 */
    handleIncrement = () => {
        const value = this.state.value + 1;
        this.setState({ value });
    };


    render() {
        return (
            <>
                <img src={this.state.imageUrl} alt="" />
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    style={this.styles}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={() => console.log(this.props)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                <br></br>
            </>

        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;