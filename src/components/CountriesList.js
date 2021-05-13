import React from 'react';
import CountryItem from './CountryItem';

const CountriesList = ({countries, onCountryClick}) => {

    const countryNodes = countries.map((country, index) => {
        console.log(country)
        return<CountryItem country = {country} key = {index} onCountryClick = {onCountryClick}/>
       
    })

    return (
     <ul>
         {countryNodes}
     </ul>

    )
}

export default CountriesList;