import React from 'react';

import {
    Link
} from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <div class="logo">
                <Link to='/'>pav<span class="highlight">_</span>ka </Link>
                </div>
            </div>

        )
    }
}