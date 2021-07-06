import React  from 'react';
import TableCartItem from '../TableCartItem/TableCartItem'
import './TableCart.css'

function TableCart( {carts} ) {

    return (
        <div className='cart-table-component'>
            <h1>Résumé De L'article</h1>
            <table>
                <thead>
                    <tr>
                        <th>Article(s)</th>
                        <th>Prix</th>
                        <th>Quantité(s)</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) => {
                    return (
                        <TableCartItem key={cart._id} cart={cart} />
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableCart
