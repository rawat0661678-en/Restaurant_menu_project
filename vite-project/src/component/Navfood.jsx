import React  from 'react'
import { FaCartArrowDown } from "react-icons/fa";

import { MdQrCodeScanner } from "react-icons/md";





function Navfood() {
  return (
    <>
    <nav className=" bg-violet-400 ">
  <div className="container flex justify-between m-auto ">
    <div className='m-2' >
        <a className="navbar-brand" href="#" >
        <img src="https://static.vecteezy.com/system/resources/previews/047/411/197/non_2x/food-logo-icon-symbol-silhouette-on-white-background-free-vector.jpg" alt=""  className='w-30 h-20 bg-green-500 rounded-xl' />   
        </a>
    </div>
    <div className="navbar_name text-5xl text-center my-auto font-serif font-semibold " >Restorent Menu </div>
    <div className='w-30 h-20 m-2 rounded-xl'><MdQrCodeScanner  className='h-20 w-30'/></div>
    <div className="addtocart my-4 ">
       <button ><FaCartArrowDown  className='h-7 w-10 m-2 ' /></button> 
    </div>
    </div>
</nav>
    </>
  )
}


export default Navfood