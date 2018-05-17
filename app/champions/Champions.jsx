import React from 'react';
import Route from 'react-router-dom/Route';
import Champion from './champion/Champion.jsx';
import AllChampions from './AllChampions.jsx';

function Champions() {
    return (
        <div className="section">
            <Route exact path="/champions" component={AllChampions} />
            <Route path="/champions/:championId" component={Champion} />
        </div>
    );
}

export default Champions;
