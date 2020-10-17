import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
        imageUrl: "~/ESS.png",
        animals: [
            "dog", "cat", "goat"
        ]
     };

     handleIncrement = () => this.setState({count: this.state.count + 1})

     styles = {
        fontSize: 10,
        fontWeight: 'bold'
     };

    render() { 

        return (
        <>
            <img src={this.state.imageUrl} alt=""/>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            style={this.styles} 
            className="btn btn-secondary btn-sm">
                Increment
            </button>
           
        </>
            
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;