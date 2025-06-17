import { Link } from "react-router-dom"

function Semester5() {
  return (
     <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 5</div>

        <div className="scroll-m-20 py-5 text-xl px-5  md:text-2xl  tracking-tight">
            Download the Syllabus from the Link : xyz<br/><br/>
            <Link to={'/thirdyear/semester5/dsp'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Digital Signal Processing
            </li>
            
            </Link>
            
            <Link to={'/thirdyear/semester5/dcom'}>
             <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Digital Communication
            </li>
            </Link>
           
           <Link to={'/thirdyear/semester5/microcontroller'}>
           <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Microcontroller 
            </li>
           
           </Link>
            
            <Link to={'/thirdyear/semester5/lcs'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Linear Control System
            </li>
            
            </Link>
            
            <Link to={'/thirdyear/semester5/coa'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Computer Architecture
            </li>
            
            </Link>
            
            
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester5










