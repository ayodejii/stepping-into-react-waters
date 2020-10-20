import React, { Component } from 'react';
class Counter extends Component {
    // state = {
    //     id: this.props.id, 
    //     value: this.props.counter.value,
    //     imageUrl: "~/ESS.png",
    //     animals: [
    //         "dog", "cat", "goat"
    //     ]
    //  };

     //handleIncrement = () => this.setState({value: this.state.value + 1})

     styles = {
        fontSize: 10,
        fontWeight: 'bold'
     };

    render() { 

        return (
        <>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
            style={this.styles} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button><br></br>
           
        </>
            
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;