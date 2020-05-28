import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './MainWindow.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <h1>Stamp Collector</h1>
                <div className="">
                    <Link className="RouterLink" to="/">Home</Link> | <Link className="RouterLink" to="/About">About</Link> | <Link className="RouterLink" to="/AddStamp">Add Stamp</Link> | <Link className="RouterLink" to="/List">List</Link> | <Link className="RouterLink" to="/Summary">Summary</Link>
                </div>
            </div>
        )
    }
}

export default Header
