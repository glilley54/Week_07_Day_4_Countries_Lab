import React from 'react';
import CountryItem from './CountryItem';

const CountriesList = ({countries}) => {

    const countryNodes = countries.map((country, index) => {
        return<CountryItem country = {country} key = {index}>{country.name}</CountryItem>
    })

    return (
     <ul>
         {countryNodes}
     </ul>

    )
}

export default CountryItem;