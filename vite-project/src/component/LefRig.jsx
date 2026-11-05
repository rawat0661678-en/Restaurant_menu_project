import React from "react";

import "./Lefrig.css";

function LefRig({ Product}) {
  return (
    <>
      <div className="container img-box bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform m-3 ">
          <div className="box w-100  ">
            <div>
              <img
                src={Product.image}
                alt={Product.name}
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h1 className=" text-lg font-bold text-gray-800 truncate mt-4" >{Product.name}</h1>
            </div>
          </div>
        </div>
    </>
  );
}
export default LefRig;
