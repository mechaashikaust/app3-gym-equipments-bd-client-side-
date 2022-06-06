import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <h2 className='text-center mb-4'>Manage Your Equipments</h2>

            {
                equipments.map(equipment => <div key={equipment._id}>


                    <div>

                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                    <td>
                                        <img className='w-25' src={equipment.img} alt="" />
                                    </td>
                                    <td>
                                        {equipment.name}
                                    </td>
                                    <td>
                                        <Link to={`/updateequipment/${equipment._id}`}> <button className='btn btn-warning fw-bold btn-gradient'>Update</button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteEquipment(equipment._id)} className='btn btn-danger fw-bold btn-gradient' >Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                    </div>




                </div>)
            }

            <Link className='text-decoration-none' to={'/addequipment'}>
                <button className='btn btn-lg btn-light fw-bold d-block mx-auto mt-5 mb-5 text-decoration-none'>Add New Item</button>
            </Link>

        </div>
    );
};

export default ManageInventories;