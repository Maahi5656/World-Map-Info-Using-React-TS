import React from 'react'

import { FC } from 'react'

import { CountryInfo } from './WorldMap';
import SearchResult from './SearchResult'

const SearchResultList: FC<CountryInfo[]|any> = ({ searchResults }) => {
    console.log(searchResults);
    
    return (
        <div className='results-list'>
            {
                searchResults.map((result: CountryInfo[]|any, id: any)=>{
                    // return <div key={id}>{ result.name }</div>
                    return <SearchResult results={result} key={id} />
                })
            }
        </div>
    )
}

export default SearchResultList