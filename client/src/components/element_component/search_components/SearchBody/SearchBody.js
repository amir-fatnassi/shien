import React, {useEffect, useState} from 'react'
import './SearchBody.css'
import CardSearch from '../CardSearch/CardSearch'
import { useSelector, useDispatch } from 'react-redux'
import {getProducts} from '../../../../redux/shopping/shopping-action'

const SearchBody = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProducts())
    },[])

    const {products} = useSelector((state) => state.shop)

    return (
        <div className='search-body-container'>
            {(products.length > 0) && products.map((product) => {
                return(
                <CardSearch key={product.id} product={product} />
            )})}
        </div>
    )
}

export default SearchBody
