import React from 'react'
import min from '../../image/min.jpg'
import min1 from '../../image/slid-1.jpg'
import min2 from '../../image/slid-2.jpg'
import min3 from '../../image/slid-3.jpg'
import './ProductImage.css'

const ProductImage = () => {
    const images = [min, min1, min2, min3]
    const [image, setimage] = React.useState(images[0])
    const hendelImage = x => {
        setimage(images[x])
    }
    return (
        <div className='product-image-container'>
            <div className="mini-images">
                {
                    images.map((el, index) => {
                        return (
                            <div className="min-image" key={index}>
                                <img src={el} alt="" className="min" onMouseEnter={() =>hendelImage(index)} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="product-image">
            <img src={image} alt="" className="product" />
            </div>
        </div>
    )
}

export default ProductImage
