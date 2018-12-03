import React, { Component } from 'react';
import axios from 'axios';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
    state = {
        currentMonth: '',
        monthList: []
    }
    
    getMonths = () => {
        axios.get('/calendar')
        .then( res => {
            this.setState({
                monthList: res.data
            })
        }).catch( err => {
            console.log( 'error in GET request:', err );
        })
    }
    handleClick = (e) => {
        this.setState({
            currentMonth: e.target.innerHTML
        })
    }

    componentDidMount() {
        this.getMonths();
    }

    render() {
        return (
            <div className="App">
                <Header 
                    currentMonth={this.state.currentMonth} 
                />
                <MonthList 
                    months={this.state.monthList}
                    handleClick={this.handleClick}
                />
                <br />
                <p>List of months goes here</p>
            </div>
        );
    }
}

export default App;
