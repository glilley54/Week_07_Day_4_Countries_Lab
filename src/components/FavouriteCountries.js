import React from 'react';
import FavCountry from './FavCountry'

const FavouriteCountries = ({favourites}) => {

    const favCountryNodes = favourites.map((country, index) => {
        return <FavCountry country = {country} key = {index} index = {index} />

    })

    return (
        <ul>
            {favCountryNodes}
        </ul>
    )

}

export default FavouriteCountries