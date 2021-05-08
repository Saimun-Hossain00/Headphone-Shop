import axios from 'axios';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';
import { Link as a } from '@material-ui/core';
import AdminHome from '../AdminHome/AdminHome';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        };
        const url = `https://quiet-ocean-53136.herokuapp.com/addProduct`

        console.log(productData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log(res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '541e0456570f9999fac30ad0b35d9640')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className=" row">
            <AdminHome />
            <div className="col-md-4 mt-5">
                <h1 className="mt-4 ml-5">Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="newProduct">
                        <input name="name" placeholder="product name" ref={register} />
                        <br />
                        <input name="price" placeholder="price" ref={register} />
                        <br />
                        <input name="description" placeholder="description" ref={register} />
                        <br />
                        <div className="container-img">
                            <input className="upload-box" type="file" onChange={handleImageUpload} />
                        </div>
                        <br />
                    </div>
                    <input className=" btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;