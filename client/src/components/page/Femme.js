import HeroSection from '../../components/element_component/HeroSection/HeroSection'
import SimpleSlid from '../element_component/slider/simpleSlid/SimpleSlid'
import MultiSlid from '../element_component/slider/multiSlid/MultiSlid';
import Categrie from '../element_component/Categorie/Categorie'
import women1 from '../image/hero1.jpg'
import wo6 from '../image/hero2.jpg'
import wo5 from '../image/hero3.jpg'
import wo2 from '../image/hero5.jpg'

import { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/shopping/shopping-action'



const Femme = () => {
    const categories = [
        {
            categ: 'Bobe',
            icon: 'https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?b=1&k=6&m=507081676&s=612x612&w=0&h=bvMq50doXQbStWYHA_opPLFB0Ufj1i-YhTJaQhJsuqY='
        },
        {
            categ: 'Ti-shert',
            icon: 'https://thumbs.dreamstime.com/z/clean-t-shirt-line-icon-laundry-sign-clothing-cleaner-vector-symbol-linear-design-colorful-156469548.jpg'
        },
        {
            categ: 'skirt',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnXNuojuVUfIaRV-l4XAifeiVm0ozyKQpxg&usqp=CAU'
        },
        {
            categ: 'Shoe',
            icon: 'data:image/jpeg;base64,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'
        },
        {
            categ: 'Bobe',
            icon: 'https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?b=1&k=6&m=507081676&s=612x612&w=0&h=bvMq50doXQbStWYHA_opPLFB0Ufj1i-YhTJaQhJsuqY='
        }
    ];

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProducts('femme'))
    }, [dispatch])
    
      const products = useSelector((state) => state.shop.products);

    return (
        <>
            <HeroSection 
                image={women1}
                vedio={"/videos/vid4.mp4"}
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
                position='left'
            />
            <Categrie categories={categories} />
            <SimpleSlid
                image1={wo6}
                image2={wo5}
                image3={wo2}
            />
            <HeroSection
                // image={women2}
                vedio={"/videos/vid4.mp4"}
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
                position=''
            />
            <MultiSlid products={products}/>
        </>
    )  
}
export default Femme
