import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const videos = props.videos.map(video => {
        return <VideoItem video={video} onSelectVideo={props.onSelectVideo}/>
    });
    console.log(videos)
    return (
        <div className="ui relaxed divided list">
            {videos}
        </div>
    );
};


export default VideoList;
