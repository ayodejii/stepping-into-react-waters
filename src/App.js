import React , { useState }  from 'react';
import logo from './logo.svg';
import Counters from './components/counters'
import NavBar from './components/navbar'
import './App.css';

function App() {
  
  const [state, setState] = useState({ 
    counter: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 2},
        {id: 4, value: 0}
    ]
 })

 const handleIncrement = count => {
    const counter = [...state.counter];
    const index = counter.indexOf(count);
    counter[index] = {...count}
    counter[index].value++;
    setState({counter});
 }

 const handleDelete = (counterId) => {
     const counts = state.counter.filter(x => x.id !== counterId);
     setState({counter: counts});
 };

 const handleReset = () => {
    // const counter = this.state.counter.map(x => {
    //     x.value = 0;
    //     return x;
    // });
    const counter = []
    state.counter.forEach(c => {
        c.value = 0;
        counter.push(c);
    });
    setState({counter})
 }

  return (
    <>
    <NavBar />
    <main className="container">
    <Counters
    onReset={handleReset}
    onIncrement={handleIncrement}
    onDelete={handleDelete}
    counters={state.counter}
    />
    </main>
    </>
  );
}

export default App;
