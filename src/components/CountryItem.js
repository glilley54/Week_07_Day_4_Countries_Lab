import React from 'react';
import CountryInfo from './CountryInfo'

const CountryItem = ({country, onCountryClick}) => {

    const handleClick = function() {
        onCountryClick(country)
    }

  

    return (
        <li onClick={handleClick}>
            <h1>{country.name}</h1>
            <p>Total Population: {country.population}</p>
        </li>

    )
}

export default CountryItem;