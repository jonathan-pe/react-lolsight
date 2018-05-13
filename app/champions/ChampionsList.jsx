import React from 'react';
import config from '../../config.js';
import { SyncLoader } from 'react-spinners';

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
                <table className="table is-bordered is-hoverable is-fullwidth championList">
                    <tbody>
                        {props.champions.map(champion => (
                            <tr>
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

export default ChampionsList;
