import React from 'react';
// import FavouriteCountries from './FavouriteCountries'

const FavCountry = ({country, onButtonClick}) => {
  
    return (
        <li>
            <p class = "fav-countries">{country.name}</p>
        </li>
    )
}

export default FavCountry;