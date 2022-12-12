import axios from "axios";

// let base_url = "https://apis.digital.gob.cl/fl/"
let base_url = "https://api.victorsanmartin.com/feriados/es.json"

export const getFeriadosData = async () => {
    try {
        let url = base_url
        const response = await axios(url)
        const { data } = response.data
        return data

    } catch (error) {

    }
}


