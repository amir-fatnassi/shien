import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardItem from '../../cardItem/CardItem'
import dre1 from '../../../image/dre1.jpg'
import dre2 from '../../../image/dre2.jpg'
import dre3 from '../../../image/dre3.jpg'
import dre4 from '../../../image/dre4.jpg'
import dre5 from '../../../image/dre5.jpg'
import dre6 from '../../../image/dre6.jpg'
import dre7 from '../../../image/dre7.jpg'
import './MultiSlid.css'

const MultiSlid = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true
    };

    return (
        <div className='multi-slid-container'>
            <Slider {...settings}>
                <div >
                    <CardItem image={dre1} />
                </div>
                <div>
                    <CardItem image={dre2}/>
                </div>
                <div>
                    <CardItem image={dre3}/>
                </div>
                <div>
                    <CardItem image={dre4}/>
                </div>
                <div>
                    <CardItem image={dre5}/>
                </div>
                <div>
                    <CardItem image={dre6}/>
                </div>
                <div>
                    <CardItem image={dre7}/>
                </div>
            </Slider>
        </div>
    )
}

export default MultiSlid
