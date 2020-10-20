import React, { Component } from 'react';
import Counter from './counter';

const Counters = (props) => {
    return ( 
        <>
        <button className="btn btn-primary btn-sm m-2" onClick={props.onReset}>
            Reset
        </button><br/>
        {
        props.counters.map(count => 

        <Counter onDelete={props.onDelete}
        onIncrement={props.onIncrement} 
        id={count.id} 
        key={count.id} 
        counter={count}/>
        )}<br/>
        </>
    );
} 
export default Counters;
