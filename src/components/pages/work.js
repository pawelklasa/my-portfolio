import React from 'react';
import {
    // eslint-disable-next-line
    Link
} from 'react-router-dom';

import './styles/work.css';

export class Work extends React.Component {
    render() {
        return (
            <div class="content content-two">
                <div class="talktalk">
                    <img src="https://picsum.photos/620/349?image=29" alt="blah"/>
                    <h3>TalkTalk</h3>
                    <p>Some text description goes here</p>
                </div>
                <div class="sky">
                    <img src="https://picsum.photos/620/349?image=25" alt="blah"/>
                    <h3>SKY</h3>
                    <p>Some text description goes here</p>
                </div>
                <div class="jlr">
                    <img src="https://picsum.photos/g/620/349" alt="blah"/>
                    <h3>JLR</h3>
                    <p>Some text description goes here</p>
                </div>
                <div class="btp">
                <img src="https://picsum.photos/620/349?image=23" alt="blah"/>
                    <h3>British Transport Police</h3>
                    <p>Some text description goes here</p>
                </div>
            </div>
        )
    }
}