import React, { useState } from "react";
import axios from "axios";

const componentAttributes = {
        cooling: ["name", "brand", "type", "price"],
        cpu: ["name", "brand", "coreCount", "clockSpeed", "powerDraw", "price"],
        gpu: ["name", "brand", "vram", "clockSpeed", "powerDraw", "price"],
        mb: ["name", "brand", "wifi", "pcieSlots", "socket", "price"],
        PcCase: ["name", "brand", "size", "price"],
        psu: ["name", "brand", "watts", "price"],
        ram: ["name", "brand", "size", "clockSpeed", "price"],
        storage: ["name", "brand", "size", "type", "price"],
};

const PartForm = () => {
        const [partType, setPartType] = useState("cpu"); 
        const [formData, setFormData] = useState({});

        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                axios
                        .post(`http://localhost:8000/api/${partType}s/`, formData) 
                        .then((res) => console.log(res.data))
                        .catch((err) => console.log(err));
        };

        return (
                <form onSubmit={handleSubmit} className="form col-md-4 mx-auto">
                        <div className="form-group mt-3">
                                <label className="form-label">Select Component Type</label>
                                <select className="form-control" onChange={(e) => setPartType(e.target.value)} value={partType}>
                                        {Object.keys(componentAttributes).map((type) => (
                                                <option key={type} value={type}>{type.toUpperCase()}</option>
                                        ))}
                                </select>
                        </div>

                        {componentAttributes[partType].map((attribute) => (
                                <div key={attribute} className="form-group mt-3">
                                        <label className="form-label">{attribute}</label>
                                        <input
                                                type="text"
                                                className="form-control"
                                                name={attribute}
                                                onChange={handleChange}
                                        />
                                </div>
                        ))}

                        <button className="btn btn-primary mt-3">Submit {partType.toUpperCase()}</button>
                </form>
        );
};

export default PartForm;
