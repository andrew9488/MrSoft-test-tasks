import axios from "axios";

const instance = axios.create({
    baseURL: `http://www.mrsoft.by/data.json`
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