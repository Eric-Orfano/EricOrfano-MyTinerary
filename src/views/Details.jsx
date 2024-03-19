import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCitiesById, getItineraries } from "../services/citiesQueries";
import Itinerary from "../components/Itinerary";


const Details = () => {
    const params = useParams();
    const [city, setCity] = useState({});
    const [itinerarios,setItinerarios] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        getCitiesById(params.id)
        .then((respuesta) => {
            if (respuesta._id) {
                setCity( respuesta)
                getItineraries(params.id).then((e) => setItinerarios(e))
            } else {
                alert("City not found ");
                navigate("/Cities");
            }
        })
        .finally(() => setLoading(false));
    }, [] );

    if (loading) {
        return (
            <div className="justify-center items-center">
                <h2 className="text-2xl gap-5">Loading...</h2>
            </div>
        )
    }

    // const backgroundImageStyle = {
    //     backgroundImage: `url('${city.image}')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    // }style={backgroundImageStyle}

    return (
        <main className="grow mt-20 italic text-white bg-gray-400 opa" >
        <div className="flex flex-col justify-center items-center mt-7">
            <h1 className="text-3xl sm:text-5xl underline p-2 bg-gray-500 rounded-lg mb-2 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]">{city.name}</h1>
            <h2 className="text-xl sm:text-3xl mt-5 w-24 h-11 text-center bg-gray-500 rounded-lg">{city.country}</h2>
            <img className="w-12/13 h-[500px] object-cover border border-solid m-4" src={city.image} alt="" />
            <Link to="/Cities" className="text-lg font-black border border-solid border-black rounded-lg p-2 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)] bg-gray-500">Back To The Cities</Link>
        </div>
        <div className="flex flex-col items-center text-center mb-2">
            <p className='w-48 mt-12 p-5 text-lg bg-gray-500 rounded-lg'>Ours Itinerarys</p>
            {itinerarios.length > 0 ? (
                <div key={itinerarios._id}>
                    {itinerarios.map((itinerario) => (
                        <Itinerary itinerario={itinerario} />
                    ))}                
                </div>
            ) : (
                <p className='w-48 mt-12 p-5 text-lg bg-gray-500 rounded-lg shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]'>Under construction</p>
            )} 
        </div>
    </main>
    )
}

export default Details

