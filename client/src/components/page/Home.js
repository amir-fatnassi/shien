import HeroSection from '../../components/element_component/HeroSection/HeroSection'
import SimpleSlid from '../element_component/slider/simpleSlid/SimpleSlid'
import MultiSlid from '../element_component/slider/multiSlid/MultiSlid';

import { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { viewProduct } from '../../redux/shopping/shopping-action'
import { Link } from "react-router-dom";

import im1 from '../image/homF1.jpg'
import im2 from '../image/homF2.webp'
import im3 from '../image/homF3.jpg'
import im4 from '../image/homF4.gif'
import im5 from '../image/man4.jpg'
import im6 from '../image/man2.jpg'
import im7 from '../image/homH1.webp'
import im8 from '../image/hero6.gif'
const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewProduct())
    }, [dispatch])
    
      const productHomme = useSelector((state) => state.shop.productHomme);
      const productFemme = useSelector((state) => state.shop.productFemme);
      console.log(productHomme)
      console.log(productFemme)
    return (
        <>
          <Link  to="/femme">
            <HeroSection 
                image={im1} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
                path='femme'
            />
            <MultiSlid products={productFemme} path='femme'/>
          </Link>
            <SimpleSlid
                image1={im2}
                image2={im3}
                image3={im4}
            />
          <Link  to="/homme">
            <HeroSection 
                image={im5} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
                position='left'
                path='homme'
            />
            <MultiSlid products={productHomme} path='homme'/>
          </Link>
            <SimpleSlid
                image1={im6}
                image2={im7}
                image3={im8}
            />
        </>
    )
}

export default Home
