import React from 'react';

import { IndexLink, Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand" style={{color: "#ffffff"}}>计时器</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><IndexLink to="/" activeStyle={{color: "#ffffff"}}>计时器</IndexLink></li>
                            <li><Link activeStyle={{color: "#ffffff"}} to="/countdown">倒计时</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;