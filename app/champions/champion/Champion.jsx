import React from 'react';
import Route from 'react-router-dom/Route';
import config from '../../../config.js';

class Champion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            champion: null
        };
    }

    render() {
        return (
            <div>
                champion page
            </div>
        );
    }
}

export default Champion;
