import React from 'react';
import InfoTable from './InfoTable.jsx';
import config from '../../config.js';

class Summoner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            summoner: {}
        };
    }

    componentDidMount() {
        fetch(`${config.BE_BASE_URL}/summoner?name=Jeremy Linguine`)
            .then(response => response.json())
            .then(summoner => this.setState({summoner: summoner}));
    }

    render() {
        return (
            <div>
                <div className="section">
                    <InfoTable summonerName={this.state.summoner.name} summonerLevel={this.state.summoner.summonerLevel} profileIconId={this.state.summoner.profileIconId}/>
                </div>
                <div className="section">
                    Recent Matches
                </div>
            </div>
        );
    }
}

export default Summoner;
