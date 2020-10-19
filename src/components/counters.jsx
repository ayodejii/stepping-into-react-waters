import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counter: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 0 }
        ]
    }
    render() {
        return (
            <>
                {
                    this.state.counter.map(
                        count => <Counter key={count.id} id={count.id} value={count.value} />
                    )
                }
                <br />
            </>
        );
    }
}

export default Counters;