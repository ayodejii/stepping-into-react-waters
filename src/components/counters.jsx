import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counter: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 2},
            {id: 4, value: 0}
        ]
     }

     handleDelete = (counterId) => {
         console.log("delete button clicked ", counterId);
         //the counterid is undefined.
         //what exactly is going on?
     };
    render() { 
        return ( 
            <>
            {
            this.state.counter.map(count => 

            <Counter onDelete={this.handleDelete} key={count.id} value={count.value}/>

            )}<br/>
            </>
        );
    }
}
 
export default Counters;