import axios from "axios"

const KEY = "AIzaSyCRB4ihyNDtIR1oLoOL-pXH-Zzk1l_2Q50";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})
