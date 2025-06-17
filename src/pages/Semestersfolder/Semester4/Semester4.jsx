import { Link } from "react-router-dom"

function Semester4() {
  return (
    <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 4</div>

        <div className="scroll-m-20 py-5 text-xl md:text-2xl  tracking-tight">
            Download the Syllabus from the Link : xyz<br/><br/>
            <Link to={'/secondyear/semester4/analogelectronics'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Analog Electronics
            </li>
            
            </Link>
            
            <Link to={'/secondyear/semester4/communicationtheory'}>
             <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Communication Theory
            </li>
            </Link>
           
           <Link to={'/secondyear/semester4/semiconductordevices'}>
           <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Semiconductor Devices and Modeling
            </li>
           
           </Link>
            
            <Link to={'/secondyear/semester4/controlsystem'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Control Systems
            </li>
            
            </Link>
            
            <Link to={'/secondyear/semester4/machinelearning'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Machine Learning
            </li>
            
            </Link>
            
           
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester4
