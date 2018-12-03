import React, { Component } from 'react';

class MonthItem extends Component {
    render() {
        return (
            <li onClick={this.props.handleClick}>
                {this.props.month.name}
            </li>
        )
    }
}

export default MonthItem;