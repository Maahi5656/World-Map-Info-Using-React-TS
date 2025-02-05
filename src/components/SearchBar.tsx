import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

import { FC } from 'react'

import { CountryInfo } from './WorldMap';

const SearchBar: FC<CountryInfo[]|any> = ({searchResults}) => {

    const [input, setInput] = useState<string>("");

    const fetchData = async (value: string) => {

        if(!value){
            return;
        }

        try{
            const url = `https://restcountries.com/v3.1/name/${value}?fullText=true`;
            const response = await axios.get(url);

            console.log("Response: ", response);

            // Check id dat is an array
            const results: CountryInfo[]|any = response.data;
            
            console.log("Result: ", results);

            if(Array.isArray(results)){
                const resultsFound = results.filter((country)=>{
                    country.name?.common.includes(value);
                    // console.log(resultsFound);
                    searchResults(resultsFound);
                });
            }else{
                const resultsFound = results;
                // console.log(resultsFound);
                searchResults(resultsFound);
            }
            

        }catch(error){
            console.log(error);
            // throw error;
            searchResults([]);
        }

        
        // fetch(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
        // .then((response)=>response.json())
        // .then((json)=>{
        //     const results = json.filter((country: CountryInfo|any|null)=>{

        //         return (
        //             value &&
        //             country &&
        //             country.name?.common &&
        //             country.name?.common.includes(value)
        //         );
        //     });

        //     console.log(results);
        //     searchResults(results);
        // });
        
        
        // try{
        //     const url = `https://restcountries.com/v3.1/name/${value}?fullText=true`;
        //     const response = await axios.get(url);

        //     const results = response.data;

        //     console.log(results);
        //     searchResults(results);
        // }catch(error){
        //     console.log(error);
        //     throw error;
        // }
    };

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }
    // value={input} onChange={(e)=>handleChange(e.target.value)}

    return (
        <div className='input-wrapper'>
            <FaSearch  id="search-icon" />
            <input placeholder="Type your search..." value={input} onChange={(e)=>handleChange(e.target.value)}  />
        </div>
    )
}

export default SearchBar