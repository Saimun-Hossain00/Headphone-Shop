import React, { useContext, useState } from 'react';
import "./Products.css"
import { Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';

const Products = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name, imageURL, price, _id } = props.product;
    const history = useHistory()
    const handleBuyNow = ((_id) => {
        history.push('/chekOut')
        const { displayName, email } = loggedInUser
        const cartProduct = {
            name: displayName,
            email,
            productId: _id
        }
        console.log(cartProduct);
        fetch('https://quiet-ocean-53136.herokuapp.com/addCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('product added')
            })
            .catch(err => {
                console.log(err);
            })
    })

    return (
        <div className="m-3">
            <div className="cart">
                <Card style={{ width: '20rem' }}>
                    <Card.Img style={{ height: '16rem' }} variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title style={{ marginRight: '7rem', fontSize: '22px' }}>{name}</Card.Title>
                        <span style={{ marginRight: '7rem', fontSize: '22px', color: 'blue' }}>${price}</span>
                        <Button onClick={() => handleBuyNow(_id)} variant="contained" color="secondary">
                            Buy Now
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Products;