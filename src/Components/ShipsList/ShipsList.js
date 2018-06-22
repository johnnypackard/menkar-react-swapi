import React, { Component } from 'react';
import './ShipsList.css';

class ShipsList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.ShipsList.map(ship => (
                        <li key={Ships.url}>
                            {ship.name}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ShipsList;