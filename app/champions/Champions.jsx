import React from 'react';
import config from '../../config.js';
import ChampionsList from './ChampionsList.jsx';

class Champions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: [],
            filteredList: [],
            loadingChampions: true
        };
    }

    filterList(event) {
        let updatedList = this.state.champions;
        updatedList = updatedList.filter(function (champion) {
            return champion.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ filteredList: updatedList });
    }

    componentDidMount() {
        fetch(`${config.BE_BASE_URL}/champions`)
            .then(response => response.json())
            .then(champions => this.setState({
                champions: champions,
                filteredList: champions,
                loadingChampions: false
            }));
    }

    render() {
        return (
            <div className="section">
                <input className="input" type="text" placeholder="Search..." onChange={this.filterList.bind(this)} />
                <ChampionsList 
                    champions={this.state.filteredList}
                    loading={this.state.loadingChampions}
                />
            </div>
        );
    }
}

export default Champions;
