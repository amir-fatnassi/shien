import React from 'react'
import './ProductImage.css'

const ProductImage = ({img}) => {
    console.log(img)
    const [image, setimage] = React.useState(img[0])
    const hendelImage = x => {
        setimage(img[x])
    }
    return (
        <div className='product-image-container'>
            <div className="mini-images">
                {
                    img.map((el, index) => {
                        return (
                            <div className="min-image" key={index}>
                                <img src={`http://localhost:5000/public/data/uploads/${el}`} alt="" className="min" onMouseEnter={() =>hendelImage(index)} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="product-image">
            <img src={`http://localhost:5000/public/data/uploads/${image}`} alt="" className="product" />
            </div>
        </div>
    )
}

export default ProductImage
