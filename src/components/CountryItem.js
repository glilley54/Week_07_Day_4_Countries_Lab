import React from 'react';
import CountryInfo from './CountryInfo'

const CountryItem = ({country}) => {



    return (
        <li >
            <h1>{country.name}</h1>
            <p>Total Population: {country.population}</p>
        </li>

    )
}

export default CountryItem;