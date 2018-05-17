import React from 'react';
import config from '../../config.js';
import { SyncLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';

function ChampionsList(props) {
    return (
        <div>
            {props.loading ? (
                <div className="react-loader">
                    <SyncLoader
                        color={'#23d160'}
                        loading={props.loading}
                    />
                </div>
            ) : (
                <table id="championsList" className="table is-bordered is-hoverable">
                    <tbody>
                        {props.champions.map(champion => (
                            <tr onClick={() => { props.history.push(`/champions/${champion.id}`) }}>
                                <td className="imageColumn">
                                    <figure className="image is-64x64">
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/${config.API_VERSION}/img/champion/${champion.id}.png`} />
                                    </figure>
                                </td>
                                <td className="nameColumn"><strong>{champion.name}</strong> {champion.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default withRouter(ChampionsList);
