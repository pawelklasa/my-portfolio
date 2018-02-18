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
                    <Link to='/talktalk'>
                        <img src="https://www.tvbeurope.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_80%2Cw_620/MTUxNTczNzIzMDU1NDAwMjA0/homepage-2.jpg" alt="blah"/>
                    </Link>
                    <h3>TalkTalk</h3>
                    <p class="description">Text dessription goes here</p>
                </div>
                <div class="sky">
                    <img src="http://media.gizmodo.co.uk/wp-content/uploads/2015/11/TV-Sky-Q-Silver-Sky-Q-Mini-Sky-Q-HubTablet-UI-and-Content-620x349.jpg" alt="blah"/>
                    <h3>SKY</h3>
                    <p class="description">Some text description goes here</p>
                </div>
                <div class="jlr">
                    <img src="http://www.abc.es/media/motor/2017/01/16/Jaguar-Land-Rover_xoptimizadax-k3tC--620x349@abc.jpg" alt="blah"/>
                    <h3>JLR</h3>
                    <p class="description">Some text description goes here</p>
                </div>
                <div class="btp">
                <img src="https://picsum.photos/620/349?image=23" alt="blah"/>
                    <h3>British Transport Police</h3>
                    <p class="description">Some text description goes here</p>
                </div>
                <div class="jlr">
                    <img src="https://picsum.photos/g/620/349" alt="blah"/>
                    <h3>JLR</h3>
                    <p class="description">Some text description goes here</p>
                </div>
                <div class="btp">
                <img src="https://picsum.photos/620/349?image=23" alt="blah"/>
                    <h3>British Transport Police</h3>
                    <p class="description">Some text description goes here...</p>
                </div>
            </div>
        )
    }
}