import React, {useEffect, useState} from 'react';
import CountriesList from "../components/CountriesList";
import CountryInfo from "../components/CountryInfo";
import FavouriteCountries from "../components/FavouriteCountries";
import './container.css';
 
const CountriesContainer = function () {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [favourites, setFavourites] = useState([])

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

    const onButtonClick = (country) => {
        const updatedFaves = [...favourites, country]
        setFavourites(updatedFaves)
    }

    return (
        <div className="main-container">
            <CountriesList id = " countries" countries = {countries} onCountryClick = {onCountryClick} selectedCountry = {selectedCountry}/>
            <CountryInfo selectedCountry = {selectedCountry} onButtonClick = {onButtonClick}/>
            <FavouriteCountries favourites = {favourites} onButtonClick = {onButtonClick}/>
        </div>
    )
}

export default CountriesContainer; 