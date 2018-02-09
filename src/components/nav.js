import React from 'react';

import {
    Link
} from 'react-router-dom';

import './pages/styles/nav.css';

export class Nav extends React.Component {
    render() {
        return (
            <div class="nav">
                <Link to='/work'>Work&nbsp;&nbsp;</Link> 
                <a href="https://medium.com/pavcoding" target="blank">Medium&nbsp;&nbsp;</a>  
                <Link to='/contact'>Contact</Link>
            </div>

        )
    }
}