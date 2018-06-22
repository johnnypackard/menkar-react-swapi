import React, { Component } from 'react';
import qs from 'query-string';

class Search extends Component {
    constructor ( props ) {
        super( props );
    }

    componentDidMount() {
        const searchObject = qs.parse(this.props.location.search);
        console.log( searchObject );
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <h3>match object</h3>
                <pre>{JSON.stringify(this.props.match)}</pre>
                <h3>search string</h3>
                <pre>{JSON.stringify(this.props.location.search)}</pre>
                <h3>search object</h3>
                <pre>{JSON.stringify(qs.parse(this.props.location.search))}</pre>
            </div>
        );
    }
};

export default Search;