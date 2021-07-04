import React, {useState, useEffect} from 'react'
import Button from '../../Button/Button'
import './PrixTotal.css'

function PrixTotal({ carts }) {

    const [prixTotal, setPrixTotal] = useState(0);
    useEffect(() => {
        let prix = 0;
        carts.forEach(el => {
            prix += el.totqty
        });
        setPrixTotal(prix)
    }, [carts])

    return (
        <div className='prix-total-component'>
            <h2>Résumé De Votre Commande</h2>
            <div className="toutal-ch">
                <h3>Subtotal</h3>
                <h3 className='tot'> {prixTotal} € </h3>
            </div>
            <Button buttonStyle='btn--outline2' buttonSize='btn--large2' >PAYER</Button>
        </div>
    )
}

export default PrixTotal
