import React from 'react';
import './Categorie.css'

function Categrie({ categories, homme }) {
    return (
        <div className='categ-container'>
            <h1 className='cate-title'>ACHETER PAR CATERORIE</h1>
            <ul className='cate-list'>
                {categories.map((el, index) => {
                    return(
                    <li className={` ${ homme ? 'cate-list-item' : 'cate-list-item-1' }`} key={index} >
                        <div className={` ${ homme ? 'cate-item' : 'cate-item-1' }`}>
                            <img src={el.icon} alt=""  className={` ${ homme ? 'cate-item-img' : 'cate-item-img-1' }`}/>
                            <h5>{el.categ}</h5>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

Categrie.defaultProps = {
    homme: false
};

export default Categrie
