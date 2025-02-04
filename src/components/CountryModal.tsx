import React from 'react'

import { FC } from 'react'

import { CountryInfo } from './WorldMap'

interface CountryInfoModal extends CountryInfo{
    closeModal: boolean|any;
} 

const CountryModal: FC<CountryInfoModal> = ({name, capital, languages, population, continents, flags, currencies, region, subregion, closeModal}) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={()=>closeModal(false)}>X</button>
                </div>
                <div className='modalTitle'>
                    <img src={flags?.png} />
                    <h2>Name : {name?.common}</h2>
                    <h2>Official Name: {name?.official}</h2>
                </div>
                <div className='modalBody'>
                    <h2><u>Details</u></h2>
                    <ul>
                        <li>
                            <b>Capital: <span>{capital}</span></b>
                        </li>
                        <li>
                            <b>Languages: <span>{languages}</span></b>
                        </li>
                        <li>
                            <b>Region: <span>{region}</span></b>
                        </li>
                        <li>
                            <b>Sub Region: <span>{subregion}</span></b>
                        </li>
                        <li>
                            <b>Population: <span>{population}</span></b>
                        </li>
                        <li>
                            <b>Continent: <span>{continents}</span></b>
                        </li>
                        <li>
                            {
                                currencies && (
                                    <div>
                                        <ul>
                                            {
                                                 Object.entries(currencies).map(([key, value])=>(
                                                    <li key={key}>
                                                        <strong>Currency Name: { value.name }</strong>
                                                        <br />
                                                        <strong>Currency Symobl: { value.symbol }</strong>
                                                    </li>
                                                 ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CountryModal