// import logo from './logo.svg';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';
// import React from 'react';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]
  };

handleIncrement = counter => {
  // console.log(counter);
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter};
  counters[index].value++;
  // console.log(this.state.counters[0]);
  this.setState({ counters });
};

handleReset = () => {
  const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;
  });
  this.setState({ counters });
};

handleDelete = (counterId) => {
  // console.log('Event Handle Called', counterId);
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({ counters });
};
  render() { 
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length} 
        />
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}  
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
