import React from 'react';
// import FavouriteCountries from './FavouriteCountries'

const FavCountry = ({country, onButtonClick}) => {
  
    return (
        <li>
            <p>{country.name}</p>
        </li>
    )
}

export default FavCountry;