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

     handleIncrement = count => {
        const counter = [...this.state.counter];
        const index = counter.indexOf(count);
        counter[index] = {...count}
        counter[index].value++;
        this.setState({counter});
     }

     handleDelete = (counterId) => {
         const counts = this.state.counter.filter(x => x.id !== counterId);
         this.setState({counter: counts});
     };

     handleReset = () => {
        // const counter = this.state.counter.map(x => {
        //     x.value = 0;
        //     return x;
        // });
        const counter = []
        this.state.counter.forEach(c => {
            c.value = 0;
            counter.push(c);
        });
        this.setState({counter})
     }

    render() { 
        return ( 
            <>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>
                Reset
            </button><br/>
            {
            this.state.counter.map(count => 

            <Counter onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} 
            id={count.id} 
            key={count.id} 
            counter={count}/>

            )}<br/>
            </>
        );
    }
}
 
export default Counters;