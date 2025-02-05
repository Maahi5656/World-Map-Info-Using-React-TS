import React from 'react'

const SearchResult = ({ results }: any) => {
    return (
        <div className='search-result'>{ results.name.common }</div>
    )
}

export default SearchResult