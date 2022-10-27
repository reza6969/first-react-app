import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: 0,
    //     address: {
    //         street: ''
    //     }
    // };
    state = {
        count: 0,
    };
    render() {
        // return <><h1>Hello World!!</h1><button>Increment</button></>;
        // React.createElement("div");
        // return <div><h1>Hello World!!</h1><button>Increment</button><div>;
        return (
            // <div>
            //     <h1>Hello World!!</h1>
            //     <button>Increment</button>
            // </div>
            <React.Fragment>
                {/* <h1>Hello World!!</h1> */}
                {/* <span>{this.state.count}</span> */}
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        const x = <h1>Zero</h1>
        // return count === 0 ? "Zero" : count;
        // return count === 0 ? <h1>Zero</h1> : count;
        return count === 0 ? x : count;
    }
}
 
export default Counter;
