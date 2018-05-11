import React from 'react';
import config from '../../config.js';
import { SyncLoader } from 'react-spinners';

function InfoTable(props) {
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
                <table className="table is-fullwidth">
                    <tbody>
                            <tr>
                                <td>
                                    <figure className="image is-128x128">
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/${config.API_VERSION}/img/profileicon/${props.profileIconId}.png`} />
                                    </figure>
                                </td>
                                <td>
                                    <table className="table is-bordered is-fullwidth">
                                        <tbody>
                                            <tr>
                                                <td><strong>{props.summonerName}</strong></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Level: {props.summonerLevel}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default InfoTable;
