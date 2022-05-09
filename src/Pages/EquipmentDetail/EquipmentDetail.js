import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
            <h2>You are about to book: {equipment.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${equipmentId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default EquipmentDetail;