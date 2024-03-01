import React from "react";

const Enity=({ restroName,restroLocation,restroRatings }) =>{
    return(
        <>
            <div>
                <h2>{restroName}</h2>
                <h3>{restroLocation}</h3>
                <h3>{restroRatings}</h3>
            </div>
        </>
    )
};

export default Enity