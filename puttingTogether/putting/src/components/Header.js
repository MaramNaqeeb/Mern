import React, { Component } from 'react';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: this.props.age,
        }
        this.func1.bind(this)

        
    }
    func1(){
        this.setState({counter: this.state.counter+1});
    }
    render() {
        return (
            <div>
            
                <h2> { this.props.firstName } { this.props.lastName }</h2>
                <p> Age: {this.state.counter}</p>
                <p> Hair Color: {this.props.color}</p>
                <button onClick={() => this.func1()}>birthday button for { this.props.firstName } { this.props.lastName }</button>
            </div>
        );
        }
}

export default Header;