import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Header from '../Header/Header';
import { auth } from '../LogIn/LoginManager';

const OrderDetail = () => {

    const [order, setOrder] = useState([])
    const email = auth.currentUser.email
    useEffect(() => {
        fetch(`https://quiet-ocean-53136.herokuapp.com/getOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(error => {
                console.log(error);
            })
    }, [email])
    return (
        <div>
            <Header />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.length > 0 &&
                            order.map((pd) => {
                                const { productsDetail } = pd;
                                return productsDetail.map((pdDetails) => {
                                    return (
                                        <tr>
                                            <td className="text-center">{pdDetails.name}</td>
                                            <td className="text-center">${pdDetails.price}</td>
                                            <td className="text-center">
                                                {new Date(pd?.createDate).toLocaleString()}
                                            </td>
                                        </tr>
                                    );
                                });
                            })}
                    </tbody>
                </Table>
            </Container>
        </div>

    );
};

export default OrderDetail;






















// import React from 'react';



// const OrderDetail = () => {
   
//              const [order, setOrder] = useState([])
//     const email = auth.currentUser.email
//     useEffect(() => {
//         fetch(`https://quiet-ocean-53136.herokuapp.com/getOrder/${email}`)
//             .then(res => res.json())
//             .then(data => setOrder(data))
//             .catch(error => {
//                 console.log(error);
//             })
//     }, [email])
//     return (
//         <div>
//             <Header />
//             {
//                 order.length > 0 && order.map(pd => {
//                     const { productsDetail } = pd
//                     return productsDetail.map(pdDetails => {
//                         return <h1>{pdDetails.name}</h1>
//                     })
//                 })
//             }
//         </div>
//     );
// };

// export default OrderDetail;