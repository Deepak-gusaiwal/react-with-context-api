import React from 'react'
import { useParams } from 'react-router-dom'

const CountryDetail = ({ data }) => {
    const { name } = useParams();
    const countryData = data.filter((country) => {
        return country.name.common === name
    })



    return (
        <>
            {countryData.length &&

                <div className='countryDetailContainer'>
                    <h1>Country Name : {countryData[0].name.common}</h1>
                </div>
            }
        </>
    )
}

export default CountryDetail
