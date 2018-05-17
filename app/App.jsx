import React from 'react';
import TopNav from './TopNav.jsx';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home.jsx';
import Champions from './champions/Champions.jsx';
import Champion from './champions/champion/Champion.jsx';
import Summoner from './summoner/Summoner.jsx';
class App extends React.Component {
    render() {
        return (
            <div id="lolsight">
                <TopNav />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/champions" component={Champions} />
                        <Route path="/summoner" component={Summoner} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
