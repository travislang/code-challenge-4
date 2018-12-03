import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        months: []
    }
    
    getMonths = () => {
        axios.get('/calendar')
        .then( res => {
            this.setState({
                months: res.data
            })
        }).catch( err => {
            console.log( 'error in GET request:', err );
        })
    }

    componentDidMount() {
        this.getMonths();
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Select a Month</h1>
                    <h3>SELECTED MONTH GOES HERE</h3>
                    <br />
                </header>
                <br />
                <p>List of months goes here</p>
            </div>
        );
    }
}

export default App;
