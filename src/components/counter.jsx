import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: 0,
    //     address: {
    //         street: ''
    //     }
    // };
    // state = {
    //     // count: 0,
    //     // value: 0,
    //     value: this.props.counter.value,
    //     // imageUrl: 'https://picsum.photos/200'
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return <ul>{ this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // handleIncrement() {
    //     console.log('Increment Clicked!', this.state.count);
    // }

    // handleIncrement = product => {
    //     // console.log('Increment Clicked!', this.state.count);
    //     // this.state.count++;
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1});
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        // if (prevProps.counter.value !== this.props.counter,value) {
        //     // Ajax call and get new data from the server
        // }
    }


    render() {
        console.log('Counter - Rendered');
        // let classes = this.getBadgeClasses();
        // return <><h1>Hello World!!</h1><button>Increment</button></>;
        // React.createElement("div");
        // return <div><h1>Hello World!!</h1><button>Increment</button><div>;
        console.log('props', this.props);
        return (
            // <div>
            //     <h1>Hello World!!</h1>
            //     <button>Increment</button>
            // </div>
            <React.Fragment>
                {/* <h1>Hello World!!</h1> */}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span>{this.state.count}</span> */}
                {/* <span style={ this.styles } className='badge bg-primary m-2'>{this.formatCount()}</span> */}
                {/* <span style={ this.styles } className={classes}>{this.formatCount()}</span> */}
                {this.props.children}
                <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                {/* <button onClick={this.doHandleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                {/* <button onClick={ () => this.handleIncrement({ id: 1})} className='btn btn-secondary btn-sm'>Increment</button> */}
                <button 
                  onClick={ () => this.props.onIncrement(this.props.counter)} 
                  className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
                {/* <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>{ this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> */}
                {/* { this.state.tags.length === 0 && "Please create a new tag!"} */}
                {/* { this.renderTags() } */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        // classes += (this.state.value === 0) ? 'warning' : 'primary';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        // const { value } = this.state;
        const { value } = this.props.counter;
        const x = <h1>Zero</h1>
        // return count === 0 ? "Zero" : count;
        // return count === 0 ? <h1>Zero</h1> : count;
        return value === 0 ? x : value;
    }
}
 
export default Counter;
