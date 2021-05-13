import React from 'react';
import FavCountry from './FavCountry'

const FavouriteCountries = ({favourites, onButtonClick}) => {

    const favCountryNodes = favourites.map((country, index) => {
        return <FavCountry 
        country = {country} 
        key = {index} 
        index = {index} 
        onButtonClick = {onButtonClick}/>

    })

    return (
        <ul>
            <h1>Favourite Countries</h1>
            {favCountryNodes}
        </ul>
    )

}

export default FavouriteCountries;