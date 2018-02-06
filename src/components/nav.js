import React from 'react';

import {
    Link
} from 'react-router-dom';

import './pages/styles/nav.css';

export class Nav extends React.Component {
    render() {
        return (
            <div class="nav">
                <Link to='/'>Home | </Link>  
                <Link to='/work'>Work | </Link> 
                <Link to='/contact'>Contact</Link>
            </div>

        )
    }
}