import React from 'react';
import '../../App.css'
import SideBar from '../element_component/search_components/SearchSaid/SideBar'
import SearchBody from '../element_component/search_components/SearchBody/SearchBody'

const Search = ({location}) => {
    return (
        <div className='search-container'>
            <SideBar/>
            <SearchBody location={location.state}/>  
        </div>
    )
}

export default Search
