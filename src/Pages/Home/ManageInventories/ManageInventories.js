import React from 'react';
import { toast } from 'react-toastify';
import useTotalitems from '../../../Hooks/useTotalitems';
 
const ManageInventories = () => {
    const [services, setServices] = useTotalitems();

    const handleDeleteService = id => {

        const proceed = window.confirm("Are you Sure?");

        if (proceed) {
            const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {

                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    toast('Supper , Successfully Deleted. Congoooooo');

                });
        }
    }
 
    return (
        <div className='w-50 mx-auto marginTop'>
            <h2>Manage Your Services</h2>

            {
                services.map(service => <div key={service._id}>

                    <h5>
                        {service.name}
                        <button onClick={() => handleDeleteService(service._id)} >X</button>
                    </h5>

                </div>)
            }

        </div>
    );
};

export default ManageInventories;