import React, { Component } from 'react';
import './PlanetList.css';

class PlanetList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.planetList.map(planet => (
                        <li key={planet.url}>
                            {planet.name}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default PlanetList;