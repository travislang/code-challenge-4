import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Select a Month</h1>
                <h3>{this.props.currentMonth}</h3>
                <br />
            </header>
        )
    }
}

export default Header;