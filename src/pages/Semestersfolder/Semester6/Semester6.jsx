import { Link } from "react-router-dom"

function Semester6() {
  return (
    <>
    <div className="md:px-35 h-screen">

        <div className="scroll-m-20 py-5 text-center text-3xl md:text-4xl font-bold tracking-tight">Semester 6</div>

        <div className="scroll-m-20 py-5 text-xl md:text-2xl  tracking-tight">
           
            <Link to={'/thirdyear/semester6/iot'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Internet Of Things
            </li>
            
            </Link>
            
            <Link to={'/thirdyear/semester6/bsp'}>
             <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Biomedical Signal Processing
            </li>
            </Link>
           
           <Link to={'/thirdyear/semester6/microwaveengg'}>
           <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Microwave Engineering
            </li>
           
           </Link>
            
            <Link to={'/thirdyear/semester6/vlsi'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                VLSI
            </li>
            
            </Link>
            
            <Link to={'/thirdyear/semester6/cn'}>
            <li className="text-3xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                Computer Networks
            </li>
            
            </Link>
            <li className="md:text-3xl text-xl font-bold py-3 hover:underline transition duration-400 ease-in-out">
                <a
                href="/3rdyearsyllabus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-m-20 py-5 text-center text-2xl md:text-3xl font-bold tracking-tight"
                >
                Third Year Syllabus - Download
                </a>
                
            </li>
            
            
            
            
            

        </div>

    </div>
    
    </>
  )
}

export default Semester6
