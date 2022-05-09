import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-eyrie-16544.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
 
    return (
        <div id="equipments" className='container'>
            <div className="row">
                <h1 className='text-secondary text-center mt-5 mb-5'>Our Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service

                            key={service._id}
                            service={service}

                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;