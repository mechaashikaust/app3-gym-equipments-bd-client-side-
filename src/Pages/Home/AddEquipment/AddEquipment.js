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
        <div className='w-50 mx-auto marginTop'>
            <h2>Please Add a Equipment</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name'  {...register("name")} />
                <textarea className='mb-2' placeholder='Description'  {...register("description", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Equipment" />

            </form>
        </div>
    );
};

export default AddEquipment;