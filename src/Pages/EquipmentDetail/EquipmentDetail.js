import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ManageInventorySection from '../ManageInventorySection/ManageInventorySection'

const EquipmentDetail = () => {

    const { equipmentId } = useParams();
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${equipmentId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEquipment(data));
    }, [])

    return (
        <div className='marginTop'>
            <div className='d-flex'>
                <div className='equipment '>
                    <img className='w-50 img-fluid' src={equipment.img} alt="" />

                </div>

                <div className='text-center equipment'>

                    <h2><span className='text-warning'>Name : </span> {equipment.name}</h2>
                    <p><span className='text-warning'>Price : </span> {equipment.price}</p>
                    <p><small><span className='text-warning'>Description : </span>{equipment.description}</small></p>
                    <p><small><span className='text-warning'>Supplier Name : </span>{equipment.seller}</small></p>
                    <p><small><span className='text-warning'>Quantity : </span>{equipment.quantity}</small></p>

                    <Link to={`/checkout/${equipmentId}`}>
                        <button className='btn btn-secondary'>Stock Equipment</button>
                    </Link>
                </div>
            </div>
            <div className='mt-5'>
                <ManageInventorySection></ManageInventorySection>
            </div>
        </div>
    );
};

export default EquipmentDetail;