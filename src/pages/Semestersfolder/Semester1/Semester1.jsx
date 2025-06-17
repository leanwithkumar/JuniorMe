import { Link } from "react-router-dom"

function Semester1() {
  return (
    <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 1</div>

        <div className="scroll-m-20 py-5 text-xl md:text-2xl px-5 tracking-tight">
            Download the Syllabus from the Link : xyz<br/><br/>
            <Link to={'/firstyear/semester1/bee'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Basic Electrical Engineering
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester1/pps'}>
             <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Programming for Problem Solving
            </li>
            </Link>
           
           <Link to={'/firstyear/semester1/maths1'}>
           <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Mathematics 1
            </li>
           
           </Link>
            
            <Link to={'/firstyear/semester1/physics1'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Physics 1
            </li>
            
            </Link>
            
            
            
            
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester1
