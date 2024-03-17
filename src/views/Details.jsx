import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCitiesById } from "../services/citiesQueries";


const Details = () => {
    const params = useParams();
    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        getCitiesById(params.id)
        .then((respuesta) => {
            if (respuesta._id) {
                setCity( respuesta)
            } else {
                alert("City not found ");
                navigate("/Cities");
            }
        })
        .finally(() => setLoading(false));
    }, [] );

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    const backgroundImageStyle = {
        backgroundImage: `url('${city.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }



    return (
        <main className="grow mt-20 bg-gray-500 italic  opa" style={backgroundImageStyle}>
        <div className="flex flex-col justify-center items-center mt-7">
            <h1 className="text-3xl sm:text-5xl underline p-2 bg-white rounded-lg mb-2 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]">{city.name}</h1>
            <h2 className="text-xl sm:text-3xl bg-white rounded-lg shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]">{city.country}</h2>
            <img className="w-12/13 h-[500px] object-cover border border-solid m-4" src={city.image} alt="" />
            <Link to="/Cities" className="text-lg font-black border border-solid border-black rounded-lg p-2 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)] bg-white">Back To The Cities</Link>
        </div>
        <div className="flex flex-col items-center text-center mb-2">
            <p className='w-48 mt-12 p-5 text-lg bg-white rounded-lg shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]'>Ours Itinerarys</p>
            <p className='w-48 mt-12 p-5 text-lg bg-white rounded-lg shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]'>Under construction</p>
        </div>
    </main>
    )
}

export default Details