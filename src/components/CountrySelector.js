import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    const countryOptions = countries.map((country, index) => {
      return <option value={index} key={index}>{country.name}</option>
    })

    return (
        <div id = "select-container">
            <select id = "select-box" defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
            </select>
        </div>
    )
}

export default CountrySelector;