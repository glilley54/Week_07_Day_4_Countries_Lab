import React from 'react';
import CountryItem from './CountryItem';

const CountriesList = ({countries}) => {

    const countryNodes = countries.map((country, index) => {
        console.log(country)
        return<CountryItem country = {country} key = {index}/>
       
    })

    return (
     <ul>
         {countryNodes}
     </ul>

    )
}

export default CountriesList;