import React from "react";

const VideoItem = (props) => {
    return (
        <div className="video-item item" onClick={() => props.onSelectVideo(props.video)}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url}/>
            <div className="title">
                <div className="header"> {props.video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
