import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
        imageUrl: "~/ESS.png",
        animals: []
     };

     renderAnimals(){
         if (this.state.animals.length > 0) {
             return (
             <ul>
                {this.state.animals.map(am => <li key={am}>{am}</li>)}
            </ul>
            )
         }
     }

    render() { 

        return (
        <>
            {this.state.animals.length === 0 && <p>There are no animals in the freaking zoo!</p>}
            {this.renderAnimals()}
        </>
            
        );
    }
}
export default Counter;