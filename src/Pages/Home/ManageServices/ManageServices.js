import React from 'react';
import { toast } from 'react-toastify';
import userServices from '../../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = userServices();

    const handleDeleteService = id => {

        const proceed = window.confirm("Are you Sure?");

        if (proceed) {
            const url = `http://localhost:5000/equipment/${id}`;

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
        <div className='w-50 mx-auto'>
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

export default ManageServices;