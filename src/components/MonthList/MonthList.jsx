import React, { Component } from 'react';

class MonthList extends Component {

    render() {
        console.log('monthlist', this.props.months);
        
        let months = this.props.months.map( month => {
            return <li key={month.id}>{month.name}</li>
        })

        return (
            <ul>
                {months}
            </ul>
        )
    }
}

export default MonthList;