import React from 'react'

function Itinerary({itinerario}) {
    function precio(cantidad){
        let final = ""
        for(let i = 0; i<cantidad; i++){
          final += "💰"
        }
        return final
      }
  return (
        <div className=' '>
          <h2 className=''>{itinerario.title}</h2>
          <section className=''><img className='' src={itinerario.guide_image} alt={itinerario.guide} />
          <h4 className="">{itinerario.guide}</h4></section>
          <p className=''>{itinerario.description}</p>
          <p className=''>Price: {precio(itinerario.price)}</p>
          <p className=''>Duration: {itinerario.duration} Hours</p>
          <section>
            <h3 className=''>ACTIVITIES</h3>
            <div className=''>
              {itinerario.activities.map((e) => <img key={Math.random()} className='' src={e}></img>)}
            </div>
          </section>
          <p className=''>{itinerario.hashtags.join(" ")}</p>
        </div>
  )
}

export default Itinerary