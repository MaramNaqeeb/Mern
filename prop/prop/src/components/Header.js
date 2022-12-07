import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
            
                <h2> { this.props.firstName } { this.props.lastName }</h2>
                <p> Age: {this.props.age}</p>
                <p> Hair Color: {this.props.color}</p>
            </div>
        );
        }
}

export default Header;