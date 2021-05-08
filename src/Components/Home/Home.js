import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://quiet-ocean-53136.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center flex-wrap">
                {
                    products.length === 0 && <button class="btn btn-primary mt-5" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                }
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;



// const shoppingCollection = client.db("shopping").collection("products");
    // const cartProductCollection = client.db("shopping").collection("addCart");
    // const orderCollection = client.db("shopping").collection("Order");