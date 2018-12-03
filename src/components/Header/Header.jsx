import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Select a Month</h1>
                <h2>{this.props.currentMonth}</h2>
                <br />
            </header>
        )
    }
}

export default Header;