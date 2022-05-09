import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'

const Equipments = () => {

    const [equipments, setEquipments] = useState([]);
 
    useEffect(() => {
        fetch('https://mysterious-eyrie-16544.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, []);

    return (
        <div id="equipments" className='container mb-5'>
            <div className="row">
                <h1 className='text-secondary text-center mt-5 mb-5'>Equipments</h1>
                <div className='equipments-container'>
                    {
                        equipments.slice(0,6).map(equipment => <Equipment

                            key={equipment._id}
                            equipment={equipment}

                        >
                        </Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Equipments;