import React, {useEffect, useState} from 'react';
import CountriesList from './components/CountriesList';

const CountriesContainer = function () {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return (
        <CountriesList countries = {countries}/>
    )
}

export default CountriesContainer; 