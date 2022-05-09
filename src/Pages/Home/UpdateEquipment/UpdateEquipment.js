import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateEquipment = () => {

    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [])


    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const uupdatedUser = { name, price, description, img };

        // send data to the server
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${id}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uupdatedUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Users added successfully');
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    console.log(user);

    return (
        <div className='marginTop mx-auto text-center bg-secondary w-75 p-5'>
            <h2 className='mb-5'>Update Item</h2>

            <form className='mx-auto' onSubmit={handleUpdateUser}>
                <input className='w-100 mb-3' type="text" name='name' placeholder='Name' required />
                <br></br>
                <input className='w-100 mb-3' type="text" name='price' placeholder='Price' required />
                <br></br>
                <input className='w-100 mb-3' type="text" name='description' placeholder='Descriptin' required />
                <br></br>
                <input className='w-100 mb-3' type="text" name='img' placeholder='Photo url' required />
                <br></br>
                <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value='Update User' />
            </form>

        </div>
    );
};

export default UpdateEquipment;