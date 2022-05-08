import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateService = () => {

    const {id} = useParams();

    const [user, setUser] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url)
        .then(response => response.json())
        .then(data => setUser(data));
    },[])


    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const uupdatedUser = { name, price, description, img };

        // send data to the server
        const url = `http://localhost:5000/equipment/${id}`
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
        <div>
            <h2>Updating User: {id}</h2>

            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br></br>
                <input type="text" name='price' placeholder='Price' required />
                <br></br>
                <input type="text" name='description' placeholder='Descriptin' required />
                <br></br>
                <input type="text" name='img' placeholder='Photo url' required />
                <br></br>
                <input type="submit" value='Update User' />
            </form>

        </div>
    );
};

export default UpdateService;