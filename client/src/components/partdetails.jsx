import React from "react";

const PartDetailsTable = ({ build }) => {
    const partDetails = {
        cooling: ["name", "brand", "type", "price", "image"],
        cpu: ["name", "brand", "coreCount", "clockSpeed", "powerDraw", "price", "socket", "image"],
        gpu: ["name", "brand", "vram", "clockSpeed", "powerDraw", "price", "image"],
        mb: ["name", "brand", "wifi", "slots", "socket", "price", "image"],
        PcCase: ["name", "brand", "size", "price", "image"],
        psu: ["name", "brand", "watts", "price", "image"],
        ram: ["name", "brand", "size", "clockSpeed", "price", "image"],
        storage: ["name", "brand", "size", "type", "price", "image"]
    };

    return (
        <div className="mt-4">
            <h4>Component Details</h4>
            <table className="table table-striped">
                <tbody>
                    {Object.entries(build).map(([key, value]) => 
                        value && partDetails[key] ? (
                            <React.Fragment key={key}>
                                {/* Component Name as a header */}
                                <tr>
                                    <td colSpan="3" style={{ fontWeight: 'bold', textAlign: 'center', height: '100px', paddingTop: '40px' }}>
                                        <h5>{key.toUpperCase()}</h5>
                                    </td>
                                </tr>

                                {/* Component Details */}
                                {partDetails[key].map(detail => 
                                    value[detail] && (
                                        <tr key={`${key}-${detail}`}>
                                            <td>{detail.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                                            <td>
                                                {detail === "price" ? (
                                                    `$${value[detail].toFixed(2)}`
                                                ) : (
                                                    value[detail]
                                                )}
                                            </td>
                                            {/* Image now in its own column */}
                                            <td>
                                                {detail === "image" ? (
                                                    <a href={value[detail]} target="_blank" rel="noopener noreferrer">
                                                        <img 
                                                            src={value[detail]} 
                                                            alt={`${value.name} Image`} 
                                                            class ={'img-thumbnail'}
                                                        />
                                                    </a>
                                                ) : null}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </React.Fragment>
                        ) : null
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PartDetailsTable;
