import React from 'react';
import { toast } from 'react-toastify';
import useTotalitems from '../../../Hooks/useTotalitems';

const ManageInventories = () => {
    const [equipments, setEquipments] = useTotalitems();

    const handleDeleteEquipment = id => {

        const proceed = window.confirm("Are you Sure?");

        if (proceed) {
            const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {

                    const remaining = equipments.filter(equipment => equipment._id !== id);
                    setEquipments(remaining);
                    toast('Supper , Successfully Deleted. Congoooooo');

                });
        }
    }

    return (
        <div className='w-50 mx-auto marginTop'>
            <h2>Manage Your Equipments</h2>

            {
                equipments.map(equipment => <div key={equipment._id}>

                    <h5>
                        {equipment.name}
                        <button onClick={() => handleDeleteEquipment(equipment._id)} >X</button>
                    </h5>

                </div>)
            }

        </div>
    );
};

export default ManageInventories;