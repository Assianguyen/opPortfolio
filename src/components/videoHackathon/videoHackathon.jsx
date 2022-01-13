import React from 'react';
import { Player } from 'video-react';
import './videoHackathon.css'

import { link } from "glamor";
// import "node_modules/video-react/dist/video-react.css";


function VideoHack(props) {
    return (
        <div className='nopad'>
            <Player >
                <source src={require("../../assests/video/video.mp4")} type="video/ogg" />
            </Player>
        </div>
    );
}

export default VideoHack;