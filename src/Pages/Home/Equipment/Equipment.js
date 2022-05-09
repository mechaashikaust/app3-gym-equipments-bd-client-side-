import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Equipment.css';

const Equipment = ({ equipment }) => {
    const { _id, name, img, description, price, seller } = equipment;
    const navigate = useNavigate();
    const handleNavigateToEquipmentDetail = id => {
        navigate(`/equipment/${id}`);
    }
   
    console.log(equipment);
    
    return (
        <div className='equipment bg-secondary'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {seller}</p>
            <p><small>Description : {description}</small></p>
            <button onClick={() => handleNavigateToEquipmentDetail(_id)} className='btn btn-dark btn-gradient'>Stock Update</button>
            
        </div>
    );
};

export default Equipment;