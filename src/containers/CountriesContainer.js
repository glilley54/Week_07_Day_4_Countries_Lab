import React, {useEffect, useState} from 'react';
import CountriesList from "../components/CountriesList";
import CountryInfo from "../components/CountryInfo";
import './container.css';
 
const CountriesContainer = function () {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([]);

    useEffect(() => {
        getCountries();
    },[])


    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
       setSelectedCountry(country)
       
        
    }

    return (
        <div>
            <CountryInfo selectedCountry = {selectedCountry}/>
            <CountriesList countries = {countries} onCountryClick = {onCountryClick} selectedCountry = {selectedCountry}/>
        </div>
    )
}

export default CountriesContainer; 