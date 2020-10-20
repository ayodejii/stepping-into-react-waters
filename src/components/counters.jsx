import React, { Component } from 'react';
import Counter from './counter';

const Counters = (props) => {
    const {onDelete, onIncrement, onReset, counters} = props
    return ( 
        <>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
            Reset
        </button><br/>
        {
        counters.map(count => 

        <Counter onDelete={onDelete}
        onIncrement={onIncrement} 
        id={count.id} 
        key={count.id} 
        counter={count}/>
        )}<br/>
        </>
    );
} 
export default Counters;
