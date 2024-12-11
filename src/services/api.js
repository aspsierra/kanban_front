import axios from "axios"

export class Api {
    headers={ 'Content-Type': 'application/json' }
    baseApiURL = import.meta.env.VITE_API_ENDPOINT

    async get(URL, headers=this.headers){
        return await axios.get(URL, {headers})
            .then(response => response.data)
            .catch(err => {
                console.error('GET request failed:', err);
                throw err
            })

    }

    async post(URL, data, headers=this.headers) {
        return axios.post(URL, data, { headers })
          .then(response => response.data)
          .catch(error => {
            console.error('POST request failed:', error);
            throw error;
          });
    }

    async getAllKanbans(){
        return await this.get(this.baseApiURL + 'kanbans')
    }
}