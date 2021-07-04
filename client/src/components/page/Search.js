import React from 'react';
import '../../App.css'
import SideBar from '../element_component/search_components/SearchSaid/SideBar'
import SearchBody from '../element_component/search_components/SearchBody/SearchBody'

const Search = () => {
    return (
        <div className='search-container'>
            <SideBar/>
            <SearchBody/>
        </div>
    )
}

export default Search
