import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import Button from '../../Button/Button';
import { useSelector } from 'react-redux';
import './PrixTotal.css';

function PrixTotal({ carts }) { 

    console.log(carts)
    const User = useSelector(state => state.User)
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
            {carts.length > 0 &&   
                <Button buttonStyle='btn--outline2' buttonSize='btn--large2'>
                    <Link
                        to={ User.token ? {
                            pathname: "/payment",
                            cart:{ prixTotal, carts }
                        }:{
                            pathname: "/login"
                        } }
                    >
                        PAYER
                    </Link>
                </Button>
            }
        </div>
    )
}

export default PrixTotal
