import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return ( 
            <>
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>
                Reset
            </button><br/>
            {
            this.props.counters.map(count => 

            <Counter onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement} 
            id={count.id} 
            key={count.id} 
            counter={count}/>
            )}<br/>
            </>
        );
    }
}
 
export default Counters;