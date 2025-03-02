import React, { useState } from "react";
import axios from "axios";

const componentAttributes = {
        cooling: ["name", "brand", "type", "price", "image"],
        cpu: ["name", "brand", "coreCount", "clockSpeed", "powerDraw", "price", "socket", "image"],
        gpu: ["name", "brand", "vram", "clockSpeed", "powerDraw", "price", "image"],
        mb: ["name", "brand", "wifi", "pcieSlots", "socket", "price", "image"],
        PcCase: ["name", "brand", "size", "price", "image"],
        psu: ["name", "brand", "watts", "price", "image"],
        ram: ["name", "brand", "size", "clockSpeed", "price", "image"],
        storage: ["name", "brand", "size", "type", "price", "image"],
};

const PartForm = () => {
        const [partType, setPartType] = useState("cpu"); 
        const [formData, setFormData] = useState({});
        const [isOpen, setIsOpen] = useState(false);

        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                axios
                        .post(`http://localhost:8000/api/${partType}s/`, formData) 
                        .then((res) => { console.log(res.data);
                        setFormData({});
                        })
                        .catch((err) => console.log(err));
        };

        return (
                <form onSubmit={handleSubmit} className="form col-md-4 mx-auto">
                        <div className="form-group mt-3">
                                <label className="form-label">SELECT COMPONENT TYPE</label>
                                <div style={{position: "relative", width: "100%"}}> 
                                        <select className="form-control" onChange={(e) => setPartType(e.target.value)} value={partType}
                                        onClick={() => setIsOpen(!isOpen)} 
                                        onBlur={() => setIsOpen(false)} 
                                                >
                                                {Object.keys(componentAttributes).map((type) => (
                                                        <option key={type} value={type}>{type.toUpperCase()}</option>
                                                ))}
                                        </select>
                                        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
                                </div>
                        </div>

                        {componentAttributes[partType].map((attribute) => (
                                <div key={attribute} className="form-group mt-3">
                                        <label className="form-label">{attribute.toUpperCase()}</label>
                                        <input
                                                type="text"
                                                className="form-control"
                                                name={attribute}
                                                value={formData[attribute] || ""}
                                                onChange={handleChange}
                                        />
                                </div>
                        ))}

                        <button className="btn btn-primary mt-3">Submit {partType.toUpperCase()}</button>
                </form>
        );
};

export default PartForm;
