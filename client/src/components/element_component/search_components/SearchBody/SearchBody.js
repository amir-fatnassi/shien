import React, {useState, useEffect} from 'react'
import './SearchBody.css'
import CardSearch from '../CardSearch/CardSearch'
import { useSelector, useDispatch } from 'react-redux'
import {getProducts} from '../../../../redux/shopping/shopping-action'

const SearchBody = () => {
    const [val, setVal] = useState(150)
    const [vall, setVall] = useState('')
    console.log(vall)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    const {products} = useSelector((state) => state.shop);
    const productt = products.filter(el => el.price < val)
    const producttt = productt.filter(el =>(vall === "") ? el : el.name.toLowerCase().includes(vall.toLowerCase()))
    console.log(producttt)

    return (
        <div className='search-body-cont' >
            <div className="searchBar">
                <div className='search search1'>
                    <i className="fas fa-search"></i>
                    <input type="text" id="site-search" name="" onChange={(e) => setVall(e.target.value)}
                    aria-label="Search through site content"/>
                </div>
                <div className='search2'>
                    <span>Price {val} $</span>
                    <input type="range"  name="volume" onChange={(e) => setVal(e.target.value)}
                            min="0" max="300"
                            // value="150"
                            placeholder="150"
                            className='slider'/>      
                </div>
            </div>
            <div className='search-body-container'>
                {(producttt.length > 0) && producttt.map((product) => {
                    return(
                    <CardSearch key={product.id} product={product} />
                )})}
            </div>
        </div>
    )
}

export default SearchBody
