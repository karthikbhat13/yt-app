import {useState, useEffect} from 'react'
import axios from "../api/Youtube";


const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        searchVideos(defaultTerm)
    }, []);

    const searchVideos = async (term) => {
        const response = await axios.get('/search', {
            params : {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, searchVideos];
};


export default useVideos;

