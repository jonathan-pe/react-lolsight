import React from 'react';
import TopNav from './TopNav.jsx';
import Route from 'react-router-dom/Route';
import Home from './home/Home.jsx';
import Champions from './champions/Champions.jsx';
import Summoner from './summoner/Summoner.jsx';

class App extends React.Component {
    render() {
        return (
            <div id="lolsight">
                <TopNav />
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/champions" component={Champions}/>
                    <Route path="/summoner" component={Summoner}/>
                </div>
            </div>
        );
    }
}

export default App;
