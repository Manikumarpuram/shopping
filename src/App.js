// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  // state = {  }
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
 };
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({ counters }); 

    //  console.log(counter);
    //  console.log(this.state.counters[0]);
 };
 handleReset = () => {
    const counters =  this.state.counters.map(c=>{
         c.value = 0;
         return c;
     });
     this.setState({counters}); 
 }
 handleDelete = (counterId) => {
     const counters = this.state.counters.filter( c => c.id!==counterId);
     this.setState({counters});
    //  console.log("event called", counterId);

 }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value >0).length}/>
        <main className="container">
          <Counters 
          counters = {this.state.counters}
          onReset={this.handleReset} 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement} />
          </main>
    </React.Fragment>
     );
  }
}

export  default App;