import React from 'react';
import YouTube from "react-youtube";
const YouTubeBlock = (props) => {
    const videoId = props.video
    const opts = {
        height: '500',
        width: '900',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    const _onReady =(event) => {
        event.target.pauseVideo();
    }
    return (
        <YouTube opts={opts} videoId={videoId} onReady={_onReady}>

        </YouTube>
    );
};

export default YouTubeBlock;