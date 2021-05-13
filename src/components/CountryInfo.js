import React from 'react'

const CountryInfo = ({country, selectedCountry}) => {

    return (
        <div>
            <h1> name: {selectedCountry.name} </h1> 
            {/* <img> src= {selectedCountry.flag} </img> */}
        </div>
    );

};

export default CountryInfo