import { Link } from "react-router-dom"

function Semester2() {
  return (
    <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 1</div>

        <div className="scroll-m-20 py-5 text-xl md:text-2xl  tracking-tight">
            Download the Syllabus from the Link : xyz<br/><br/>
            <Link to={'/firstyear/semester1/bee'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Chemistry
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester1/pps'}>
             <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Fundamental of Measurements and Sensors
            </li>
            </Link>
           
           <Link to={'/firstyear/semester1/maths1'}>
           <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Mathematics 2
            </li>
           
           </Link>
            
            <Link to={'/firstyear/semester1/physics1'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Biology for Engineers
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester1/mechanics'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Elements for Electronics Engineering
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester1/iks'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Drawing and Computer Graphics 
            </li>
            
            </Link>
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester2
