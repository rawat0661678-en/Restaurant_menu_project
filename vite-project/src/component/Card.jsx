import React from 'react';

function Card({Product}){
    return(
        <>
            <div className="container ">
                <div className="cotainer-box img-box bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
                    <div >
                    <img src={Product.image} alt="" className="w-full h-56 object-cover rounded-lg mb-4"/>
                    </div>
                    <div className="box">
                        <h2 className='text-lg font-semibold text-gray-800 truncate'>{Product.name}</h2>
                        <p className="text-gray-800 font-medium">{Product.price}</p>
                        <p className="text-gray-800 font-medium">{Product.category}</p>

                    </div>
                    <button className ='px-6 py-3 bg-blue-400 to-violet-600 text-black font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] ' >Add To Card</button>
                </div>
                </div>
            
        </>
    );
}
export default Card