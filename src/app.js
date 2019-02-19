import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './index.css';
import Home from './views/home';
import People from './views/people';
import Contact from './views/contact';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div >
                        <div id="nav">
                            <nav>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/people'>People</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </nav>
                        </div>
                        <Route exact path='/' component={Home} />
                        <Route path='/people' component={People} />
                        <Route path='/contact' component={Contact} />
                    </div>

                </BrowserRouter>
            </div>
        )
    }
}
