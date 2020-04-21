import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

// Styled component for BasketProduct component 

const Img = styled.img`
    margin-right: 1rem;
    width: 90px;
    max-height: 75px;
    object-fit: contain;
`
const Price = styled.span`
    color: #007bff;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    display: block;
`

const DD = styled.dd`
    vertical-align: baseline;
    display: inline-block;
    line-height: 1.3;
`

const DT = styled.dt`
    margin: 0;
    display: inline-block;
    margin-right: 7px;
    font-weight: 600;
`

const DL = styled.dl`
    margin-bottom: 7px;
    line-height: 1;
    font-size: medium
`

const Image = styled.img`
    margin-right: 1rem;
    width: 200px;
    max-height: 270px;
    object-fit: contain;
`
const HyperLink = styled.a`
    &:hover {
        text-decoration: none;
    }  
`

const BasketProduct = ({product, products, setProducts}) => {

    const [productDetail, setProductDetail] = useState(false)

    // Product details modal open and close 

    const productModalClose = () => setProductDetail(false)
    const showProductModal = () => setProductDetail(true)

    // Functionality for update basket product once change the quantity value
    const updateBasketProduct = (basketProduct, productQuantity) => {
        let newBaskets = products.map(product => {
            if(product['id'] === basketProduct['id']) {
                let newQuantity = parseInt(productQuantity)
                if(parseInt(newQuantity) !== 0 || isNaN(parseInt(productQuantity))) {
                    return Object.assign({}, product, {
                        ...product,
                        quantity: productQuantity,
                        subtotal: productQuantity * basketProduct['price']
                    })
                }
                return product
            } else {
                return product
            }
        })
        setProducts([...newBaskets])
        return newBaskets
    }

    // Remove basket product functionality

    const removeBasketProduct = (product) => {
        let productToRemoveIndex = products.indexOf(product)
        let removeBaskets = [
            ...products.slice(0, productToRemoveIndex),
            ...products.slice(productToRemoveIndex + 1)
        ]
        setProducts([...removeBaskets])
        return removeBaskets
    }

    return (
        <React.Fragment>

            {/* Table for each basket product */}

            <tbody>
                <tr>
                    <td>
                        <div className="media">
                            <div className="img-wrap"><Img src={product.image} alt={product.name} className="img-thumbnail img-sm" /></div>
                            <div className="media-body">
                                <HyperLink href="/#" onClick={() => showProductModal()}>
                                    <h6 className="title">{product.name}</h6>
                                </HyperLink>
                            </div>
                        </div> 
                    </td>
                    <td>
                        <Price>
                            {product.currency}
                            {product.price}
                        </Price>
                    </td>
                    <td>
                        <div className="quantity">
                            <input 
                                id={'product' + product.id}
                                value={product.quantity}
                                type="number"
                                className="form-control quantity"
                                onChange={(evt) => updateBasketProduct(product, evt.target.value)}
                            />
                        </div>
                    </td>
                    <td>
                        <Price>
                            {product.currency}
                            {product.subtotal}
                        </Price>
                    </td>
                    <td>
                        <button type="button" className="btn btn-outline-danger" onClick={() => removeBasketProduct(product)}> × Remove</button> 
                    </td>
                </tr>
            </tbody>

            {/* Product details modal for each basket product */}

            <Modal  size="lg" show={productDetail} onHide={productModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-primary font-weight-bold">Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="media">
                        <div className="img-wrap"><Image src={product.image} alt={product.name} className="img-thumbnail"/></div>
                        <div className="media-body">   
                            <h6 className="text-primary font-weight-bold mb-3">{product.name}</h6>
                            <DL><DT>Price: </DT><DD>{product.price}</DD></DL>
                            <DL><DT>Size: </DT><DD>{product.size}</DD></DL>
                            <DL><DT>Color: </DT><DD>{product.color}</DD></DL>
                            <DL><DT>Camera: </DT><DD>{product.camera}</DD></DL>
                            <DL><DT>Internal Storage: </DT><DD>{product.storage}</DD></DL>
                            <DL><DT>Description: </DT><DD className="mt-2">{product.description}</DD></DL>
                        </div>
                    </div> 
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default BasketProduct

BasketProduct.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
    setProducts: PropTypes.func
}
