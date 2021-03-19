import axios from "axios"
export const fetchEpReq = () => {
    return {
        type:"FETCH_EP_REQ"
    }
}

export const fetchEpSuc = (episodes) => {
    return {
        type: "FETCH_EP_SUC",
        payload:episodes
    }
}

export const fetchEpFail = (error) => {
    return {
        type: "FETCH_EP_FAIL",
        payload:error
    }
}



export const fetchEpisodes = () => {
   
    
    return (dispatch) => {
        dispatch(fetchEpReq);
        axios
            .get(`https://www.breakingbadapi.com/api/episodes?`)
            .then((response) => {
                console.log("this is res", response.data);
                const episodes = response.data;
                dispatch(fetchEpSuc(episodes));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchEpFail(errorMsg));
        })
    }
}