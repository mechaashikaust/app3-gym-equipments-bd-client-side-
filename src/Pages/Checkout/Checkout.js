import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetail from '../../Hooks/useServiceDetail'

const Checkout = () => {

    const { equipmentId } = useParams();

    const [service] = useServiceDetail(equipmentId);

    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

        const myitem = {
            email: user.email,
            service: service.name,
            equipmentId: equipmentId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://mysterious-eyrie-16544.herokuapp.com/myitem', myitem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is Booked');
                    event.target.reset();
                }
            })

    }

    return (
        <div>
            <h2>Please Order your booking : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;