import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useEquipmentDetail from '../../Hooks/useEquipmentDetail'

const Checkout = () => {

    const { equipmentId } = useParams();

    const [equipment] = useEquipmentDetail(equipmentId);

    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

        const myitem = {
            email: user.email,
            equipment: equipment.name,
            equipmentId: equipmentId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://mysterious-eyrie-16544.herokuapp.com/myitem', myitem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your item is Added');
                    event.target.reset();
                }
            })

    }

    return (
        <div className='marginTop w-75 mx-auto mb-5 bg-secondary p-5'>
            <h2 className='text-center mb-5'>Please Stock your item : {equipment.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={equipment.name} name="equipment" placeholder='equipment' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-lg btn-warning mt-4 mx-auto d-block' type="submit" value="Stock Item" />
            </form>
        </div>
    );
};

export default Checkout;