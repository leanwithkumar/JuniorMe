import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className=" w-full border-b-2 border-gray-400 shadow-md">

      <div className='flex justify-between  '>
        <div className='flex justify-between'>
          <Link to={'/'}><div className='p-7 text-2xl md:text-3xl transition-transform duration-200 hover:-rotate-45'>🛩️</div></Link>  


            <div className='p-5'>
              <Link to={'/placement'}>
               <button className="border-2 border-[#1e1e1e] hover:border-green-700 py-2 md:px-5 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
                Placement Prep
              </button>
              
              </Link>
             
              
            </div>

            <div className='p-5'>
              <Link to={'/softskills'}>
              <button className="border-2 border-[#1e1e1e] hover:border-green-700 py-2  md:px-5 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
                Soft Skills
              </button>
              
              </Link>
              
              
            </div>





        </div>
        <div>
           <div className='p-5'>
            <Link to={'/getpro'}>
            <button className="border-2 border-[#1e1e1e] hover:border-green-700 py-2 md:px-5 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
                Get pro
              </button>
            
            </Link>
              
              
            </div>
            
        </div>
    </div>



    </div>
    
    </>
  )
}

export default Navbar
