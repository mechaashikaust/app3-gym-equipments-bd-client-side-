import React from 'react';
import { useForm } from "react-hook-form";

const AddEquipment = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });

    }

    return (
        <div className='w-75 bg-secondary p-5 rounded mx-auto marginTop'>
            <h2 className='text-center mb-5'>Please Add an Equipment</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name'  {...register("name")} />
                <textarea className='mb-2' placeholder='Description'  {...register("description", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-warning btn-lg fw-bold btn-gradient' type="submit" value="Add Equipment" />

            </form>
        </div>
    );
};
 
export default AddEquipment;