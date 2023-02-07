import React from "react";

const Galery = ({data}) => {
    return (
        <div className="galery">
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item} alt="" />
                    </div>
                );
            }
            )}
        </div>
    );
};

export default Galery;
