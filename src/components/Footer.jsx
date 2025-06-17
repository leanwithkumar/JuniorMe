import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
    <div className="px-40">
        <div className="border-t-2 py-5 border-gray-400 shadow-md">
        <div className="grid md:grid-cols-4 gap-6 justify-center">
            <div>
                <div className="py-5">Links</div>
                <ul className="md:py-2">
                    <a
                    href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                    target="_blank"
                    >
                    Striver A2Z SDE Sheet
                    </a>
                   </ul>
                <ul className="md:py-2">
                    <a
                    href="https://100xdevs.com/"
                    target="_blank"
                    >
                        100xDev
                    </a>
                </ul>
            </div>
            <div>
                <div className="py-5">Socials</div>
                <ul className="md:py-2">
                <a
                href="https://www.linkedin.com/in/abhay-kumar-443b981b6/"
                target="_blank"
                >LinkedIn</a>
                </ul>
                <ul className="md:py-2">
                <a
                href="https://x.com/leanwithkumar"
                target="_blank"
                >
                    Twitter
                </a>   
                    </ul>
                <ul className="md:py-2">
                <a 
                href="https://github.com/leanwithkumar"
                target="_blank"
                >
                Github
                </a>
                    
                </ul>
            </div>
            <div>
                <div className="py-5">Contact</div>
                <ul className="md:py-2">@mrhustle936@gmail.com</ul>

            </div>
            <div>
                <div className="py-5">Legal</div>
                <Link to={'/privacy'}><ul className="md:py-2">Privacy Policy</ul></Link> 
               <Link to={'/terms'}><ul className="md:py-2">Terms of Service</ul></Link>
            </div>

        </div>
    </div>

    </div>
    
    </>
  )
}

export default Footer
