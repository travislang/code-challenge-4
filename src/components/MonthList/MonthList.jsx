import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {

    render() {
        let months = this.props.months.map( month => {
            return (
                <MonthItem 
                    key={month.id}
                    month={month}
                    handleClick={this.props.handleClick}
                />
            )
                
        })

        return (
            <ul>
                {months}
            </ul>
        )
    }
}

export default MonthList;