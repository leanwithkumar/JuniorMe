import React from 'react'
import { Link } from 'react-router-dom'

function Construction() {
  return (
   <>
   <div className='pt-10 h-screen px-5'>
    <div className='scroll-m-20 py-5 text-center text-5xl md:text-4xl font-bold tracking-tight'>
      This Page is under construction.<br/><br/>
      Our team is seraching for the best content.<br/><br/>

      <div className=" pt-5 m-5">
        <div className="mx-4">
                <Link to={'/'}>
                <button className="border-2 text-3xl border-green-700 py-4 px-10 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
                Get Back
              </button>
                
                </Link>
              
            </div>
        </div>


    </div>


   </div>
   </>
  )
}

export default Construction
