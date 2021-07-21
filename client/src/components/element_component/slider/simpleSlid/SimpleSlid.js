import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlid.css'

const SimpleSlid = ( { image1, image2, image3 } ) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='simple-slid-container'>
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="" className='simple-slid-img'/>
                </div>
                <div>
                    <img src={image2} alt="" className='simple-slid-img'/>
                </div>
                <div>
                    <img src={image3} alt="" className='simple-slid-img'/>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlid
