import React from 'react';
import config from '../../config.js';
import ChampionsList from './ChampionsList.jsx';

class Champions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: [],
            loadingChampions: true
        };
    }

    componentDidMount() {
        fetch(`${config.BE_BASE_URL}/champions`)
            .then(response => response.json())
            .then(champions => this.setState({
                champions: champions,
                loadingChampions: false
            }));
    }

    render() {
        return (
            <div className="section">
                <ChampionsList 
                    champions={this.state.champions}
                    loading={this.state.loadingChampions}
                />
            </div>
        );
    }
}

export default Champions;
