import React, { Component } from 'react';
import './PeopleList.css';

class PeopleList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.PeopleList.map(ship => (
                        <li key={People.url}>
                            {person.name}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default PeopleList;