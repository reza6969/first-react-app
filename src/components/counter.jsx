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
        // imageUrl: 'https://picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{ this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
    }

    // handleIncrement() {
    //     console.log('Increment Clicked!', this.state.count);
    // }

    handleIncrement = product => {
        // console.log('Increment Clicked!', this.state.count);
        // this.state.count++;
        console.log(product);
        this.setState({ count: this.state.count + 1});
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});
    // }


    render() {
        // let classes = this.getBadgeClasses();
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
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {/* <span>{this.state.count}</span> */}
                {/* <span style={ this.styles } className='badge bg-primary m-2'>{this.formatCount()}</span> */}
                {/* <span style={ this.styles } className={classes}>{this.formatCount()}</span> */}
                <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                {/* <button onClick={this.doHandleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                <button onClick={ () => this.handleIncrement({ id: 1})} className='btn btn-secondary btn-sm'>Increment</button>
                {/* <ul>{ this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> */}
                { this.state.tags.length === 0 && "Please create a new tag!"}
                { this.renderTags() }
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
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
