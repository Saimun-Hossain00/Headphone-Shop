import React from 'react';
import './ManageProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const ManageProducts = (props) => {
    const { name, price } = props.product;

    return (
        <div className="container shit">
            <table>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <td>
                        <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                        {" "}
                        <button className="btn btn-danger"><FontAwesomeIcon icon={faEdit} /></button>
                    </td>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <td>{price}</td>
                    <td></td>
                </tr>
            </table>

        </div>
    );
};

export default ManageProducts;