import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = {
    //     counters: [
    //         { id: 1, value: 4},
    //         { id: 2, value: 0},
    //         { id: 3, value: 0},
    //         { id: 4, value: 0},
    //     ]
    //   };

    // handleIncrement = counter => {
    //   // console.log(counter);
    //   const counters = [...this.state.counters];
    //   const index = counters.indexOf(counter);
    //   counters[index] = { ...counter};
    //   counters[index].value++;
    //   // console.log(this.state.counters[0]);
    //   this.setState({ counters });
    // };

    // handleReset = () => {
    //   const counters = this.state.counters.map(c => {
    //     c.value = 0;
    //     return c;
    //   });
    //   this.setState({ counters });
    // };

    // handleDelete = (counterId) => {
    //   // console.log('Event Handle Called', counterId);
    //   const counters = this.state.counters.filter(c => c.id !== counterId);
    //   this.setState({ counters });
    // };

    render() {
        return (
        <div>
            <button
              onClick={this.props.onReset} 
              className="btn btn-primary btn-sm m-2">Reset</button>
            {/* <Counter />
            <Counter />
            <Counter /> */}
            { this.props.counters.map(counter => 
            //   <Counter key={counter.id} value={counter.value} selected={true} />)}
              // <Counter 
              //   key={counter.id} 
              //   onDelete={this.handleDelete} 
              //   value={counter.value} 
              //   id={counter.id}
              // >
              <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter={counter}
              >
                {/* <h1>Title</h1> */}
                <h1>counter #{counter.id}</h1>
              </Counter>
              )}
        </div>
        );
    }
}
 
export default Counters;