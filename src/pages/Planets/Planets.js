import React, { Component } from 'react';

class Planet extends Component {
    render() {
        return (
            <div>
                <h2>Hey, check out this planet.</h2>
                <p>{this.props.planet}</p>
            </div>
        );
    }
}

export default Planets;