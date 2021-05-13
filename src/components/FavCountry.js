import React from 'react';
// import FavouriteCountries from './FavouriteCountries'

const FavCountry = ({country}) => {
  
    return (
        <li>
            <h1>Favourite Countries</h1>
            <p>{country.name}</p>
        </li>
    )
}

export default FavCountry;