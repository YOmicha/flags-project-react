import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './country'
import { useSelector, useDispatch } from 'react-redux';


const CountryListStyled =  styled.div`
display: grid;
grid-row-gap:2.3em;

background: ar(--background);
padding:4em 2em;
border: 1px solid red;
justify-content: center;

`
function CountryList() {

    const dispatch =  useDispatch();
const countryList = useSelector((state) =>  state.countryList )

console.log('el estado es: ',countryList);

///const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        fetch('http://restcountries.eu/rest/v2/all')
        .then(
            (response) => {
                return response.json();
            }
        )
        .then( (list) => {
            //setCountryList(data);
            dispatch({
                type: 'SET_CONUTRY_LIST',
                payload: list
            });

            console.log(list.length);

        })
        .catch(() => console.log('error'))
    }, [])

return (
    <CountryListStyled>
        {
            countryList.map(({name, flag, population,region,capital}) => {
                
                return(
                    <Country 
                        flag={flag}
                        name={name}
                        population={132}
                        region={population}
                        capital={capital}
                        />
                )
            })
        }

    </CountryListStyled>
)
}

export default CountryList