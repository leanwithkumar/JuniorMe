import { Link } from "react-router-dom"

function Semester3() {
  return (
     <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 3</div>

        <div className="scroll-m-20 py-5 text-xl px-5  md:text-2xl  tracking-tight">
           
            <Link to={'/secondyear/semester3/emft'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                EMFT
            </li>
            
            </Link>
            
            <Link to={'/secondyear/semester3/signalandsystem'}>
             <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Signals And Systems
            </li>
            </Link>
           
           <Link to={'/secondyear/semester3/deld'}>
           <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Digit Electronics and Logic Design
            </li>
           
           </Link>
            
            <Link to={'/secondyear/semester3/python'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Data Structures in Python
            </li>
            
            </Link>
            
            <Link to={'/secondyear/semester3/probablityandstatistics'}>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Probablity and Statistics
            </li>
            
            </Link>
             <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                <a
                href="/2ndyearsyllabus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-m-20 py-5 text-center text-2xl md:text-3xl font-bold tracking-tight"
                >
                Second Year Syllabus - Download
                </a>
                
            </li>
          

        </div>

    </div>
    
    </>
  )
}

export default Semester3










