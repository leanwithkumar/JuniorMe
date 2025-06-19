import { Link } from "react-router-dom"

function Semester2() {
  return (
    <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 2</div>

        <div className="scroll-m-20 py-5 text-xl md:text-2xl px-5 tracking-tight">
            
            <Link to={'/firstyear/semester2/chemistry'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Chemistry
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester2/fundamentalofmeasurementandsensors'}>
             <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Fundamental of Measurements and Sensors
            </li>
            </Link>
           
           <Link to={'/firstyear/semester2/maths2'}>
           <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Mathematics 2
            </li>
           
           </Link>
            
            
            <Link to={'/firstyear/semester2/elementsofelectronics'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Elements for Electronics Engineering
            </li>
            
            </Link>
            
            <Link to={'/firstyear/semester2/egcd'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Engineering Drawing and Computer Graphics 
            </li>
            
            </Link>
             <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                <a
                href="/1styearsyllabus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-m-20 py-5 text-center text-2xl md:text-3xl font-bold tracking-tight"
                >
                First Year Syllabus - Download
                </a>
                
            </li>
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester2
