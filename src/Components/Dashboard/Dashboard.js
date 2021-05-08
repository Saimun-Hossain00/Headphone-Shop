import React, { useEffect, useState } from 'react';
import AdminHome from '../AdminHome/AdminHome';
import ManageProducts from './ManageProducts';
import './Dashboard.css'
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://quiet-ocean-53136.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteEvent = id =>{
        fetch(`https://quiet-ocean-53136.herokuapp.com/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="">
            <AdminHome />
            <div className="mt-5 d-flex flex-column justify-content-center">
                <h1 className="text-center mt-5">Manage Product</h1>

                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(pd => {
                                    const { name, price } = pd
                                    return <tr>
                                        <td className="text-center">{name}</td>
                                        <td className="text-center">${price}</td>
                                        <td className="text-right">
                                            <button className="btn"><FontAwesomeIcon icon={faPencilAlt} /></button>
                                            <button className="btn" onClick={() => deleteEvent(pd._id)}><FontAwesomeIcon icon={faTrash} /></button>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>

        </div>

    );

};

export default Dashboard;