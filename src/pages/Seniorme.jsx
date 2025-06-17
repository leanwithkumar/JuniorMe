import { Link } from "react-router-dom"

function Seniorme() {
  return (
    <>
    <div  className="px-10 m-5 md:px-20 py-10">


        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-20 md:h-screen gap-10">
          


        <div className=" pt-5 m-5">
        <div className="text-9xl inline-block transition-transform duration-500 hover:scale-125 hover:rotate-[360deg]">
        🚀
        </div>
        </div>




           <div>
            <h3 className="scroll-m-20 p-5 text-4xl md:text-5xl font-bold tracking-tight">
              SeniorMe
            </h3>
            <h3 className="scroll-m-20 p-5 text-xl md:text-2xl font-bold tracking-tight">
              We are still working on this and about to launch SeniorMe in December 2025.<br/><br/>
              At senior me you will be able to make account and mark you progress.
            </h3>

            <div className="mx-4">
                <Link to={'/'}>
                <button className="border-2 border-green-700 py-4 px-10 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
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

export default Seniorme
