import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventorySection = () => {
    return (
        <div>
            <div className="container mb-4">
                <div className="row d-flex flex-row text-center">
                    <div>
                        <Link to={'/manageinventory'}>
                            <button className='btn btn-lg btn-light fw-bold'>Manage Inventory</button>
                        </Link>
                    </div>
                    <div className='mt-3'>
                        <h1>Want ot see more Equipments ? </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventorySection;