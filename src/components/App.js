
import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, searchVideos] = useVideos('chelsea');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);



    return (
        <div className="ui container">
            <SearchBar onFormSubmit={searchVideos}/>
            <VideoDetail video={selectedVideo}/>
            <VideoList videos={videos} onSelectVideo={setSelectedVideo}/>
        </div>
    )

}


export default App;