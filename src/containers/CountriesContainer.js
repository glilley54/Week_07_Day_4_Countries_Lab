import React, {useEffect, useState} from 'react';
import CountriesList from "../components/CountriesList";
// import CountrySelect from "../components/CountrySelect";
 
const CountriesContainer = function () {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null);

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
        <CountriesList countries = {countries} onCountryClick = {onCountryClick} />
    )
}

export default CountriesContainer; 