import {Link} from 'react-router-dom'

const CitiesCard = ({cities}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <article className="border border-solid border-white m-3" key={cities.name}>
          <Link to={"/Cities/" + cities._id}>
            <img className=" w-40 h-28 sm:w-72 sm:h-72 object-cover" src={cities.image} alt="" />
            <footer className="border border-white">
              <h1 className="bg-black bg-opacity-50 text-white text-s sm:text-xl text-center border-solid italic underline">{cities.name}</h1>
              <p className="bg-black bg-opacity-50 text-white text-xs sm:text-sm text-center italic">{cities.country}</p>
            </footer>
          </Link>
      </article>
    </div>
  )
}

export default CitiesCard