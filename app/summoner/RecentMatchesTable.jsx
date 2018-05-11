import React from 'react';
import config from '../../config.js';
import { SyncLoader } from 'react-spinners';

function RecentMatchesTable(props) {
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
                    <div>
                        Recent Matches Table Goes Here
                    </div>
                )}
        </div>
    );
}

export default RecentMatchesTable;
