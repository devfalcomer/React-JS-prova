import axios from "axios";

const apiArtes = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/artworks',
    headers: {
        'content-type': 'aplication/json',
        'Authorization': 'AIC-User-Agent: aic-bash (engineering@artic.edu)'
    }
})

export default apiArtes;