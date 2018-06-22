import React, { PropTypes } from 'react';
import icon from './images/starship.svg';

const Starship = props => (
    <li className = "results_item">
        <h3 className="results_title">{props.item.name}</h3>
        <div
            className="results_bg"
            id={props.item.type}
            dangerouslySetInnerHTML={{ _html: icon }}
        />
        <ul className="results_info">
            <li>Model <span>{props.item.model}</span></li>
            <li>Manufacturer <span>{props.item.manufacturer}</span></li>
            <li>Hyperdrive <span>{props.item.hyperdrive_rating}</span></li>
        </ul>
    </li>
);

Starship.PropTypes = {
    item: PropTypes.shape({
        terrain: PropTypes.string.isRequired,
        gravity: PropTypes.string,
        name: PropTypes.string,
        population: PropTypes.string,
        type: PropTypes.string,
    }),
};

export default Planet;