import React from 'react';
import InfoTable from './InfoTable.jsx';
import config from '../../config.js';
import RecentMatchesTable from './RecentMatchesTable.jsx';

class Summoner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            summoner: {},
            loadingSummoner: true,
            loadingMatches: true
        };
    }

    componentDidMount() {
        fetch(`${config.BE_BASE_URL}/summoner?name=Jeremy Linguine`)
            .then(response => response.json())
            .then(summoner => this.setState({
                summoner: summoner,
                loadingSummoner: false
            }));
    }

    render() {
        return (
            <div>
                <div className="section">
                    <InfoTable 
                        summonerName={this.state.summoner.name}
                        summonerLevel={this.state.summoner.summonerLevel}
                        profileIconId={this.state.summoner.profileIconId}
                        loading={this.state.loadingSummoner}
                    />
                </div>
                <div className="section">
                    <RecentMatchesTable 
                        loading={this.state.loadingMatches}
                    />
                </div>
            </div>
        );
    }
}

export default Summoner;
