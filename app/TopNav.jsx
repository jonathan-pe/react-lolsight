import React from 'react';
import { Link } from 'react-router-dom';

function TopNav(props) {
    return (
        <nav className="navbar is-success">
            <div className="navbar-brand">
                <Link to="/" exact={true} className="navbar-item">Home</Link>
                <Link to="/champions" className="navbar-item">Champions</Link>
                <Link to="/summoner" className="navbar-item">Summoner</Link>
            </div>
        </nav>
    );
}

export default TopNav;
