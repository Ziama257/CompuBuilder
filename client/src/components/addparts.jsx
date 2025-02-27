import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const CpuForm = () => {

        const [name, setName] = useState("");
        const [brand, setBrand] = useState("");
        const [coreCount, setCoreCount] = useState(0);
        const [clockSpeed, setClockSpeed] = useState(0);
        const [powerDraw, setPowerDraw] = useState(0);
        const [price, setPrice] = useState(0);
        const [errors, setErrors] = useState("");
        // const formValidator = () => {
        //     if (name.length < 2 || brand.length < 2 || coreCount < 1 || clockSpeed < 0.5) {
        //         return false;
        //     }
        //     return true;
        // }
        const handleSubmit = (e) => {
                // if (formValidator()){
                // e.preventDefault();
                axios.post('http://localhost:8000/api/cpus/', {
                        name, brand, coreCount, clockSpeed, powerDraw, price
                })
                        .then(res => {
                                console.log(res.data);

                        })
                        .catch(err => console.log(err))
                // }
        }
        return (
                <form onSubmit={handleSubmit} className="form col-md-4 mx-auto">
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Brand</label>
                                <input type="text" className='form-control' onChange={(e) => setBrand(e.target.value)} />
                        </div>
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Core Count</label>
                                <input type="text" className='form-control' onChange={(e) => setCoreCount(e.target.value)} />
                        </div>
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Clock Speed</label>
                                <input type="text" className='form-control' onChange={(e) => setClockSpeed(e.target.value)} />
                        </div>
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Power Draw</label>
                                <input type="text" className='form-control' onChange={(e) => setPowerDraw(e.target.value)} />
                        </div>
                        <div className='Form-group mt-3'>
                                <label htmlFor="" className='form-label'>Price</label>
                                <input type="text" className='form-control' onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <button className='btn btn-primary mt-3'>Submit CPU</button>
                </form>
        )
}

export default CpuForm;
