
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "../../cardItem/CardItem";
import "./MultiSlid.css";

const MultiSlid = ({products, path}) => { 

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
  };

  return (
    <div className="multi-slid-container">
      <Slider {...settings}>
        {products.slice(0, 7).map((prod) => (
          <div key={prod._id}>
            <CardItem prod={prod} path={path} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiSlid;
