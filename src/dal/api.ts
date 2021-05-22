import axios from "axios";

const instance = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/http://www.mrsoft.by`, // use it for CORS
})

type ResponseType = {
    data: string[]
}

export const API = {
    getStrings() {
        return instance.get<ResponseType>(``)
            .then(response => {
                return response.data
            })
    }
}