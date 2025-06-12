import axios from "axios"

// parse response
const parseApiResponse = (response) => {
    const data = response && response.data ? response.data.data : null
    return { data }
}


const getRequest = (url, config) =>{
    return axios.get(url , config)
}

export { getRequest, parseApiResponse }