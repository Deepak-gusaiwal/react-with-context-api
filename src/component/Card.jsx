import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { name, population, region, flags,maps } = data;

    const formattedPopulation = new Intl.NumberFormat("en-IN", {
        // maximumSignificantDigits: 3,
    }).format(parseInt(population));
    
    return (
        <div className='card'>
            <img src={flags.svg} alt={name.common} />
            <h4>{name.common}</h4>
            <h3>{region}</h3>
           <a target='_blank' href={maps.googleMaps}>Google Map</a>
            <h3>{formattedPopulation}</h3>

            <Link to={`/country/${name.common}`}>Read More</Link>
        </div>
    )
}

export default Card
