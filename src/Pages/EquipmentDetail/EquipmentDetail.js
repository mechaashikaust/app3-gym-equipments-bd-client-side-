import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EquipmentDetail = () => {

    const { equipmentId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${equipmentId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${equipmentId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default EquipmentDetail;