import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Html from "./pages/Html"
import Css from "./pages/Css"
import Javascript from "./pages/Javascript"
import Reactjs from "./pages/Reactjs"
import Nodejs from "./pages/Nodejs"
import Expressjs from "./pages/Expressjs"
import Mongodb from "./pages/Mongodb"
import Postman from "./pages/Postman"
import TypeScript from "./pages/Typescript"
import Nextjs from "./pages/Nextjs"
import Linux from "./pages/Linux"
import Github from "./pages/Github"
import Semester1 from "./pages/Semestersfolder/Semester1/Semester1"
import Basicelectricalengg from "./pages/Semestersfolder/Semester1/Basicelectricalengg"
import Physics1 from "./pages/Semestersfolder/Semester1/Physics1"
import Pps from "./pages/Semestersfolder/Semester1/Pps"
import Maths1 from "./pages/Semestersfolder/Semester1/Maths1"
import Semester5 from "./pages/Semestersfolder/Semester5/Semester5"
import Dsp from "./pages/Semestersfolder/Semester5/Dsp"
import Dcom from "./pages/Semestersfolder/Semester5/Dcom"
import Microcontroller from "./pages/Semestersfolder/Semester5/Microcontroller"
import Lcs from "./pages/Semestersfolder/Semester5/Lcs"
import Coa from "./pages/Semestersfolder/Semester5/Coa"
import Semester3 from "./pages/Semestersfolder/Semester3/Semester3"
import Semester6 from "./pages/Semestersfolder/Semester6/Semester6"
import Semester4 from "./pages/Semestersfolder/Semester4/Semester4"
import Cn from "./pages/Semestersfolder/Semester6/Cn"
import Vlsi from "./pages/Semestersfolder/Semester6/Vlsi"
import Microwave from "./pages/Semestersfolder/Semester6/Microwave"
import Iot from "./pages/Semestersfolder/Semester6/Iot"
import Bsp from "./pages/Semestersfolder/Semester6/Bsp"
import Seniorme from "./pages/Seniorme"
import Softslills from "./pages/Softslills"
import Placement from "./pages/Placement"
import Emft from "./pages/Semestersfolder/Semester3/Emft"
import Signalsystem from "./pages/Semestersfolder/Semester3/Signalsystem"
import Deld from "./pages/Semestersfolder/Semester3/Deld"
import Python from "./pages/Semestersfolder/Semester3/Python"
import Probablity from "./pages/Semestersfolder/Semester3/Probablity"
import Controlsystem from "./pages/Semestersfolder/Semester4/Controlsystem"
import Analogelectronics from "./pages/Semestersfolder/Semester4/Analogelectronics"
import Communicationtheory from "./pages/Semestersfolder/Semester4/Communicationtheory"
import Machinelearning from "./pages/Semestersfolder/Semester4/Machinelearning"
import Semiconductor from "./pages/Semestersfolder/Semester4/Semiconductor"
import Construction from "./pages/Construction"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Homeee"

function App() {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <div className="md:px-35">
    
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/softskills' element={<Softslills/>}/>
      <Route path='/placement' element={<Placement/>}/>
      <Route path='/getPro' element={<Seniorme/>}/>



      




      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      




      
      <Route path='/webdevelopment/html' element={<Html/>}/>
      <Route path="/webdevelopment/css" element={<Css/>}/>
      <Route path="/webdevelopment/javascript" element={<Javascript/>}/>
      <Route path="/webdevelopment/reactjs" element={<Reactjs/>}/>
      <Route path="/webdevelopment/nodejs" element={<Nodejs/>}/>
      <Route path="/webdevelopment/expressjs" element={<Expressjs/>}/>
      <Route path="/webdevelopment/mongodb" element={<Mongodb/>}/>
      <Route path="/webdevelopment/postman" element={<Postman/>}/>
      <Route path="/webdevelopment/typescript" element={<TypeScript/>}/>
      <Route path="/webdevelopment/nextjs" element={<Nextjs/>}/>
      <Route path="/webdevelopment/linux" element={<Linux/>}/>
      <Route path="/webdevelopment/github" element={<Github/>}/>


      <Route path="/firstyear/semester1" element={<Semester1/>}/>
      <Route path="/firstyear/semester1/bee" element={<Basicelectricalengg/>}/>
      <Route path="/firstyear/semester1/physics1" element={<Physics1/>}/>
      <Route path="/firstyear/semester1/pps" element={<Pps/>}/>
      <Route path="/firstyear/semester1/maths1" element={<Maths1/>}/>
      <Route path="/firstyear/semester1/bee" element={<Basicelectricalengg/>}/>




      <Route path="/firstyear/semester2" element={<Construction/>}/>



      <Route path="/secondyear/semester3" element={<Semester3/>}/>
      <Route path="/secondyear/semester3/emft" element={<Emft/>}/>
      <Route path="/secondyear/semester3/signalandsystem" element={<Signalsystem/>}/>
      <Route path="/secondyear/semester3/deld" element={<Deld/>}/>
      <Route path="/secondyear/semester3/python" element={<Python/>}/>
      <Route path="/secondyear/semester3/probablityandstatistics" element={<Probablity/>}/>





      <Route path="/secondyear/semester4" element={<Semester4/>}/>
      <Route path="/secondyear/semester4/controlsystem" element={<Controlsystem/>}/>
      <Route path="/secondyear/semester4/analogelectronics" element={<Analogelectronics/>}/>
      <Route path="/secondyear/semester4/communicationtheory" element={<Communicationtheory/>}/>
      <Route path="/secondyear/semester4/machinelearning" element={<Construction/>}/>
      <Route path="/secondyear/semester4/semiconductordevices" element={<Semiconductor/>}/>




      <Route path="/thirdyear/semester5" element={<Semester5/>}/>
      <Route path="/thirdyear/semester5/dsp" element={<Dsp/>}/>
      <Route path="/thirdyear/semester5/dcom" element={<Dcom/>}/>
      <Route path="/thirdyear/semester5/microcontroller" element={<Microcontroller/>}/>
      <Route path="/thirdyear/semester5/lcs" element={<Lcs/>}/>
      <Route path="/thirdyear/semester5/coa" element={<Coa/>}/>

      <Route path="/thirdyear/semester6" element={<Semester6/>}/>
      <Route path="/thirdyear/semester6/cn" element={<Cn/>}/>
      <Route path="/thirdyear/semester6/vlsi" element={<Vlsi/>}/>
      <Route path="/thirdyear/semester6/microwaveengg" element={<Microwave/>}/>
      <Route path="/thirdyear/semester6/iot" element={<Iot/>}/>
      <Route path="/thirdyear/semester6/bsp" element={<Bsp/>}/>



      <Route path="/fourthyear/semester7" element={<Construction/>}/>





      <Route path="/fourthyear/semester8" element={<Construction/>}/>



      








    </Routes>

    </div>
    <Footer/>
    

    </>
  )
}

export default App
