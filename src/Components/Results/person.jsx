import React, { PropTypes } from 'react';
import icon from './images/vader.svg';

const Person = props => (
    <li className = "results_item">
        <h3 className="results_title">{props.item.name}</h3>
        <div
            className="results_bg"
            id={props.item.type}
            dangerouslySetInnerHTML={{ _html: icon }}
        />
        <ul className="results_info">
            <li>Gender <span>{props.item.gender}</span></li>
            <li>Height <span>{props.item.height}</span></li>
            <li>Weight <span>{props.item.mass}kg</span></li>
        </ul>
    </li>
);

Person.PropTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        type: PropTypes.string,
    }),
};

export default Person;