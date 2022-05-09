import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();
    const handleNavigateToEquipmentDetail = id => {
        navigate(`/equipment/${id}`);
    }
    return (
        <div className='service bg-secondary'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateToEquipmentDetail(_id)} className='btn btn-dark btn-gradient'>Book: {name}</button>
            <Link to={`/updateequipment/${_id}`}> <button className='btn btn-dark btn-gradient'>Update</button></Link>
        </div>
    );
};

export default Service;