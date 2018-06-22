import React, { PropTypes } from 'react';
import icon from './images/planet.svg';

const Planet = props => (
    <li className = "results_item">
        <h3 className="results_title">{props.item.name}</h3>
        <div
            className="results_bg"
            id={props.item.type}
            dangerouslySetInnerHTML={{ _html: icon }}
        />
        <ul className="results_info">
            <li>Terrain <span>{props.item.terrain}</span></li>
            <li>Gravity <span>{props.item.gravity}</span></li>
            <li>Population <span>{props.item.population}</span></li>
        </ul>
    </li>
);

Planet.PropTypes = {
    item: PropTypes.shape({
        terrain: PropTypes.string.isRequired,
        gravity: PropTypes.string,
        name: PropTypes.string,
        population: PropTypes.string,
        type: PropTypes.string,
    }),
};

export default Planet;