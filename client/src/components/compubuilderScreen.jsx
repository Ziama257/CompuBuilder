import React, { useState } from "react";
import PartDetailsTable from "../components/partdetails";
import axios from "axios";

const BuildDisplay = () => {
    const [step, setStep] = useState(1);  
    const [name, setName] = useState("");  
    const [budget, setBudget] = useState(1000);  
    const [usage, setUsage] = useState("gaming");  
    const [build, setBuild] = useState(null);  
    const [error, setError] = useState(null);  
    const [showDetails, setShowDetails] = useState(false)

    const handleGenerateBuild = async () => {
        try {
            // API call to generate the build
            const response = await axios.post("http://10.0.0.14:8000/api/builds/generate", { budget, usage });
            setBuild(response.data);
            setError(null);  
            setStep(4);  
        } catch (err) {
            setError(err.response?.data?.error || "Error generating build");
            setBuild(null);  
        }
    };
    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="container">
            <h1>CompuBuilder</h1>
            <h2>Start your PC build on <span>your</span> terms!</h2>
            {/* step 1*/}
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
                        let's get started
                    </button>
                    <div className="progress mt-3">
                        <div className="progress-bar" aria-valuenow= {step} aria-valuemin= "1"  aria-valuemax = "4" aria-label={"Step ${step} of 4"} role="progressbar" style={{ width: `${((step -1) / 3) * 100}%` }}></div>
                    </div>
                </div>
                
            )}

            {/* step 2 */}
            {step === 2 && (
                <div className="form-group">
                    <label>What's the budget for your build?</label>
                    <input
                        type="number"
                        className="form-control"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                    />
                    <button className="btn btn-primary mt-3" onClick={() => setStep(3)}>
                        what's next?
                    </button>
                    <div className="progress mt-3">
                        <div className="progress-bar" aria-valuenow= {step} aria-valuemin= "1"  aria-valuemax = "4" aria-label={"Step ${step} of 4"} role="progressbar" style={{ width: `${((step -1) / 3) * 100}%` }}></div>
                    </div>
                    <button className="btn btn-secondary mt-3" onClick={handleBack}>back</button>
                </div>
            )}

            {/* step 3 */}
            {step === 3 && (
                <div className="form-group">
                    <label>What are you building for?</label>
                    <select className="form-control" value={usage} onChange={(e) => setUsage(e.target.value)}>
                        <option value="gaming">Gaming</option>
                        <option value="editing">Editing</option>
                        <option value="workstation">Workstation</option>
                    </select>
                    
                    <button className="btn btn-primary mt-3" onClick={handleGenerateBuild}>
                        build my PC
                    </button>
                    <div className="progress mt-3">
                        <div className="progress-bar" aria-valuenow= {step} aria-valuemin= "1"  aria-valuemax = "4" aria-label={"Step ${step} of 4"} role="progressbar" style={{ width: `${((step-1) / 3) * 100}%` }}></div>
                    </div>
                    <button className="btn btn-secondary mt-3" onClick={handleBack}>back</button>
                </div>
            )}

            {error && <p className="text-danger mt-3">{error}</p>}
            {build && step === 4 && (
                <div className="mt-4">
                    <h3>{name}, take a look at your recommended build, for around ${budget}.</h3>
                    <div style={{ display: "flex", alignItems: "flex-start", marginTop: "50px"}}>
                        <div id = "caseImg">
                            {build.pcCase && build.pcCase.image && (
                                <img 
                                    src={build.pcCase.image} 
                                    alt={build.pcCase.name} 
                                    class ={'rounded'}
                                    style={{ width: '200px', height: 'auto', marginRight: '20px' }}
                                />
                            )}
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{borderBottom: "2px solid black"}}>
                                    <th>Component</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(build).map(([key, value]) => (
                                    value ? (
                                        <tr key={key}>
                                            <td>{key.toUpperCase()}</td>
                                            <td>{value.brand} {value.name}</td>
                                            <td>${value.price.toFixed(2)}</td>
                                        </tr>
                                    ) : (
                                        <tr key={key}>
                                            <td>{key.toUpperCase()}</td>
                                            <td colSpan="2">Not included</td>
                                        </tr>
                                    )
                                ))}
                                <tr style={{borderTop: "2px solid black"}}>
                                    
                                    <td colSpan="2" style={{ textAlign: 'right' }}>Total:</td>
                                    <td>
                                        ${Object.values(build).reduce((total, component) => component ? total + component.price : total, 0).toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-secondary mt-3" id ="back-btn" onClick={handleBack}>Back</button>
                    <button 
                        className="btn btn-secondary mt-3" 
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? "Hide Details" : "View Details"}
                    </button>
                    {showDetails && <PartDetailsTable build={build} />}
                </div>
            )}
        </div>
    );
};

export default BuildDisplay;
