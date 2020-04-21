import React from 'react'
import PropTypes from 'prop-types'

const BasketTotals = ({products, setProducts, currency}) => {

    // Calculate total price for each quantity and price value
    const getBasketTotals =() => {
        let basketTotals = 0
        if(products.length > 0){
            products.map(product => {
                return basketTotals += parseInt(product['subtotal'])
            })
            return basketTotals
        }
    }

    // Reset all product subtotal, quantity and total is Zero 
    const resetBasketProduct = () => {
        let resetBaskets = products.map(product => {
            return Object.assign({}, product, {
                ...product,
                quantity: 0,
                subtotal: '0.00'
            })
        })
        setProducts([...resetBaskets])
        return resetBaskets
    }

    // After will implement checkout method

    const getCheckout =() => {
        alert('After will implement checkout functionality')
    }

    return (
        <div className="row text-center p-2">
            <h4 className="text-right">Total: <strong>{`${currency}${getBasketTotals()}`}</strong></h4>
            <div className="ml-auto btn-group">
                <button type="button" className="btn btn-info mr-5 rounded-0" onClick={() => resetBasketProduct()}>Clear</button>
                <button type="button" disabled={getBasketTotals() === 0} className="btn btn-success btn-block rounded-0" onClick={() => getCheckout()}>Checkout</button>
            </div>
        </div>
    )
}

export default BasketTotals

BasketTotals.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func,
    currency: PropTypes.string
}
