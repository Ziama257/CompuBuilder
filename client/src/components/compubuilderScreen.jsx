import React, { useState } from "react";
import axios from "axios";

const BuildDisplay = () => {
    const [step, setStep] = useState(1);  // Track the current form step
    const [name, setName] = useState("");  // Store user's name
    const [budget, setBudget] = useState(1000);  // Store budget input
    const [usage, setUsage] = useState("gaming");  // Store intended use
    const [build, setBuild] = useState(null);  // Store the generated build
    const [error, setError] = useState(null);  // Store error message

    const handleGenerateBuild = async () => {
        try {
            // Make API call to generate the build
            const response = await axios.post("http://10.0.0.14:8000/api/builds/generate", { budget, usage });
            setBuild(response.data);
            setError(null);  // Reset error state
            setStep(4);  // Move to the final step to display the build
        } catch (err) {
            setError(err.response?.data?.error || "Error generating build");
            setBuild(null);  // Reset build if error occurs
        }
    };

    return (
        <div className="container">
            <h2>Generate PC Build</h2>

            {/* Step 1: Name Input */}
            {step === 1 && (
                <div className="form-group">
                    <label>What's your name?</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn btn-primary mt-3" onClick={() => setStep(2)}>
                        Next
                    </button>
                </div>
            )}

            {/* Step 2: Budget Input */}
            {step === 2 && (
                <div className="form-group">
                    <label>Budget ($)</label>
                    <input
                        type="number"
                        className="form-control"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                    />
                    <button className="btn btn-primary mt-3" onClick={() => setStep(3)}>
                        Next
                    </button>
                </div>
            )}

            {/* Step 3: Intended Use Selection */}
            {step === 3 && (
                <div className="form-group">
                    <label>Intended Use</label>
                    <select className="form-control" value={usage} onChange={(e) => setUsage(e.target.value)}>
                        <option value="gaming">Gaming</option>
                        <option value="editing">Editing</option>
                        <option value="workstation">Workstation</option>
                    </select>
                    <button className="btn btn-primary mt-3" onClick={handleGenerateBuild}>
                        Generate Build
                    </button>
                </div>
            )}

            {/* Display Error Message */}
            {error && <p className="text-danger mt-3">{error}</p>}

            {/* Display Generated Build */}
            {build && step === 4 && (
                <div className="mt-4">
                    <h3>{name}'s Build:<br/>${budget.toFixed(2)} Budget</h3>
                    <div id = "caseImg">
                        {build.pcCase && build.pcCase.image && (
                            <img 
                                src={build.pcCase.image} 
                                alt={build.pcCase.name} 
                                style={{ width: '200px', height: 'auto', marginRight: '20px' }}
                            />
                        )}
                </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Component</th>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Price ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterate through the build and display components */}
                            {Object.entries(build).map(([key, value]) => (
                                value ? (
                                    <tr key={key}>
                                        <td>{key.toUpperCase()}</td>
                                        <td>{value.brand}</td>
                                        <td>{value.name}</td>
                                        <td>${value.price.toFixed(2)}</td>
                                    </tr>
                                ) : (
                                    <tr key={key}>
                                        <td>{key.toUpperCase()}</td>
                                        <td colSpan="2">Not included</td>
                                    </tr>
                                )
                            ))}
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'right' }}>Total:</td>
                                <td>
                                    ${Object.values(build).reduce((total, component) => component ? total + component.price : total, 0).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BuildDisplay;
