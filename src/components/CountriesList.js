import React from 'react';
import CountryItem from './CountryItem';

const CountriesList = ({countries, onCountryClick, selectedCountry}) => {

    const countryNodes = countries.map((country, index) => {
        return<CountryItem 
        country = {country} 
        key = {index} 
        onCountryClick = {onCountryClick} 
        selectedCountry = {selectedCountry}/>
       
    });

    return (
     <ul>
         {countryNodes}
     </ul>

    )
}

export default CountriesList;