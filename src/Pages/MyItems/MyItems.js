import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://mysterious-eyrie-16544.herokuapp.com/myitem?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        } 
        getOrders();

    }, [user])


    return (
        <div className='w-50 mx-auto marginTop'>
            <h2 className='text-center mb-4'>Your Total Items: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>

                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                    <td><h6>Email</h6>
                                        {order.email}
                                    </td>
                                    <td><h6>Item Name</h6>
                                        {order.equipment}
                                    </td>
                                    <td><h6>Address</h6>
                                        {order.address}
                                    </td>
                                    <td><h6>Phone</h6>
                                        {order.phone}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                </div>)
            }



        </div>
    );
};

export default MyItems;