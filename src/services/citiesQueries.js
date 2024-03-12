import axios from "axios"


export const getCities = async() => {
    try{
        const respuesta = await axios ("http://localhost:4000/api/cities")
        return respuesta.data.data
    } catch (err) {
        console.log(err);
        return []
    }
}
