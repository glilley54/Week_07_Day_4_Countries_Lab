import React from 'react'

const CountryInfo = ({selectedCountry, onButtonClick}) => {

    const handleClick = function() {
        onButtonClick(selectedCountry)
    }
    
    return (
        <div >
            <h1> Flag of {selectedCountry.name}</h1> 
            <img id = "flag" src={selectedCountry.flag}></img>
            <button onClick={handleClick}>Add to Favourites</button>

        </div>
    );

};

export default CountryInfo