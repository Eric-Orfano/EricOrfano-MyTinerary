import axios from "axios"

const getAllCountries = async() => {
    try {
        const {data} = await axios('https://restcountries.com/v3.1/all?fields=name')
        const countries = data.map(e => e.name.cammon)
        return countries.short()
    } catch (error) {
        return []
    }
}

export{ getAllCountries }