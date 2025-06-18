import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="px-10 md:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-30 md:h-screen gap-10">
          <div>
            <h3 className="scroll-m-20 p-5 text-4xl md:text-5xl font-bold tracking-tight">
              JuniorMe
            </h3>
            <h3 className="scroll-m-20 p-5 text-xl md:text-2xl font-bold tracking-tight">
              A place where you will get majority of resources for academics
            </h3>

            <div className="mx-4">
              <Link to={'/getpro'}>
              <button className="border-2 border-green-700 py-4 px-10 rounded-3xl font-bold hover:bg-green-700 hover:text-[#1e1e1e] transition-transform duration-100">
                Get Pro
              </button>
              </Link>
              
            </div>
          </div>

          <div className="space-y-4 pb-15 perspective-[1000px]">
  <img
    src="/maps.png"
    alt="Map"
    className="transition-transform duration-1000 transform hover:rotate-y-45"
  />
</div>





        </div>











        <div className="px-5">
            <div>
                <h3 className="scroll-m-20 text-center text-4xl md:text-5xl font-bold tracking-tight">
            Academics
          </h3>

            </div>
            
            

        <div className=" grid md:grid-cols-2 py-20">
          <h3 className="text-3xl font-bold mb-6">
            First Year
            <div className="text-2xl py-5 md:pr-5">
                Better to focus on Programming for Problem Solving and Basics of Electrical Engineering
            </div>
            
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Link to={'/firstyear/semester1'}>
             <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 1
                  </h1>
              
                </div>
                
              </div>
            </div>
            
            </Link>
           




          <Link to={'/firstyear/semester2'}>
           <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                   Semester 2
                  </h1>
                  
                </div>
                
              </div>
            </div>

            </Link>
           
          </div>
        </div>
          
          
          


        <div className=" grid md:grid-cols-2 py-20">
          <h3 className="text-3xl font-bold mb-6">
            Second Year
        <div className="text-2xl py-5 md:pr-5">
            After exploring first year and solving leetcode let's jump in Core subjects.
            Developers don't you know about Gsoc?
        </div>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">


            <Link to={'/secondyear/semester3'}>
             <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 3
                  </h1>
                  
                </div>
                
              </div>
            </div>
            
            
            </Link>
           

            <Link to={'/secondyear/semester4'}>
            <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 4
                  </h1>
                  
                </div>
                
              </div>
            </div>
            
            </Link>
            






          </div>
        </div>
        <div className=" grid md:grid-cols-2 py-20">
          <h3 className="text-3xl font-bold mb-6">
            Third Year
            <div className="text-2xl py-5 md:pr-5">
            Ready for Gate? <br/>More Like do or die sitiuation, Well follow Strivers A2Z sheet religiously and make 3 projects. Don't add todo list in resume.
        </div>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Card 1 */}
            <Link to={'/thirdyear/semester5'}>

            <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 5
                  </h1>
                  
                </div>
                
              </div>
            </div>
            
            </Link>
            

            {/* Card 2 */}
            <Link to={'/thirdyear/semester6'}>

            <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 6
                  </h1>
             
                </div>
                
              </div>
            </div>
            
            
            </Link>
            






          </div>
        </div>
        <div className=" grid md:grid-cols-2 py-20">
          <h3 className="text-3xl font-bold mb-6">
            Fourth Year
            <div className="text-2xl py-5 md:pr-5">
           It will ask everything buddy trust me someday it will be worth it.
        </div>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            
          <Link to={'fourthyear/semester7'}>
          <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                   Semester 7
                  </h1>
                  
                </div>
                
              </div>
            </div>
          
          </Link>
            




            <Link to={'/fourthyear/semester8'}>
            <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Semester 8
                  </h1>
                </div>
               
              </div>
            </div>
            
            
            </Link>
            


          </div>
        </div>

        </div>




        <div className="px-5">
            <div className="text-center mt-16">
          <h3 className="scroll-m-20 py-5 text-4xl md:text-5xl font-bold tracking-tight">
            Web Development
          </h3>

          <div className="py-10 grid md:grid-cols-4 gap-4 ">
            
            <Link to={'/webdevelopment/html'}>
             <div>
                <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://mgearon.com/wp-content/uploads/2015/07/HTML5-Logo.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    HTML 
                  </h1>
                  
                </div>
                
              </div>
            </div>
            </div>
            </Link>



           
<Link to={'/webdevelopment/css'}>
<div>
                <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://mgearon.com/wp-content/uploads/2014/08/CSS3-Logo.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    CSS
                  </h1>
                  
                </div>
               
              </div>
            </div>
            </div>

</Link>


            

            <div>
              <Link to={'/webdevelopment/javascript'}>
              <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_sEn24GdlhKqI6zd0n6X4lbfVJlhN8l92w&s"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    JavaScript
                  </h1>
                 
                </div>
                
              </div>
            </div>
              
              </Link>
                


            </div>
            <div>
              <Link to={'/webdevelopment/reactjs'}>
              <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://logowik.com/content/uploads/images/react.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    ReactJS
                  </h1>
                  
                </div>
                
              </div>
            </div>
              
              </Link>
                





            </div>
            <div>
              <Link to={'/webdevelopment/nodejs'}>

              <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/736x/4d/fc/38/4dfc38802784bcf687f616e7e5a4370c.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    NodeJS
                  </h1>
                 
                </div>
                
              </div>
            </div>
              
              </Link>
                





            </div>
            <div>
              <Link to={'/webdevelopment/expressjs'}>
                <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTpPLpgJQEwgScDxsNacdu7k139D4MI3g1A&s"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    ExpressJS
                  </h1>
                
                </div>
               
              </div>
            </div>
              
              </Link>
              




            </div>
            <div>
              <Link to={'/webdevelopment/mongodb'}>
                 <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/736x/b2/31/7e/b2317e8174e5fcef57c74c662f57d155.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    MongoDB
                  </h1>
                 
                </div>
                
              </div>
            </div>
              
              </Link>
             



            </div>
            <div>

              <Link to={'/webdevelopment/postman'}>
               <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdsaOH3LxJisOtkMCdTpqEn-HJmauzZl68A&s"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Postman
                  </h1>
                  
                </div>
               
              </div>
            </div>
              
              
              </Link>
               


            </div>
            <div>
              <Link to={'/webdevelopment/typescript'}>

              <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/7c/a1/eb/7ca1eb00-cc83-11cb-0072-47f624f9a1b7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    TypeScript
                  </h1>
                  
                </div>
               
              </div>
            </div>
              
              </Link>
               




            </div>
            <div>
              <Link to={'/webdevelopment/nextjs'}>
               <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    NextJS
                  </h1>
                </div>
                
              </div>
            </div>
              
              </Link>
               


            </div>
            <div>
              <Link to={'webdevelopment/linux'}>

              <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://thumbs.dreamstime.com/b/linux-logo-vector-format-available-illustrator-ai-linux-logo-136767231.jpg"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    Linux
                  </h1>
                </div>
                
              </div>
            </div>
              
              </Link>
                





            </div>


            <div>
              <Link to={'/webdevelopment/github'}>
               <div className="w-full max-w-xs rounded-xl bg-black text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701"
                alt="Bored Ape"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-sm truncate max-w-[140px]">
                    GitHub
                  </h1>
                  
                </div>
                
              </div>
            </div>
              
              </Link>
               




            </div>

          </div>


        </div>
        </div>



        <div className="py-10">
            <div className="py=10 text-center">
                <h3 className="scroll-m-20 py-5 text-4xl md:text-5xl font-bold tracking-tight">
            Why JuniorMe?
          </h3>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-10">
                <div>
                    <img src='/myimg1.png' className="px-10 pb-5  "/>
                </div>
                <div className="scroll-m-20 text-xl px-5 font-sbold tracking-tight">
                    You might be thinking why to should choose JuniorMe?<br/><br/>
                    Umm because JuniorMe will help you to get all your doughts clear within few steps.<br/><br/>
                    Actually I was bored and have nothing in my hand till the 6th semester.<br/><br/>3rd Year was about to over so I decided to make this website that can help me as well as you if you fall or jump in Electronics and Communication Engineering.
                    <br/><br/>

                    A special thanks to my mentor <a href="https://www.linkedin.com/in/mohit-pandey-5b0756197/" target="_blank" className="hover:underline"> Mohit Pandey </a>, my batchmate <a href="https://www.linkedin.com/in/apurb-mishra-30b41b258/" target="_blank" className="hover:underline">Apurb Mishra</a> and my junior <a href="https://www.linkedin.com/in/harmandeep-singh-a65129319/" target="_blank" className="hover:underline">Harmandeep Singh </a>  for helping me to finish this project.


                    

                </div>
            </div>



        </div>

        

        
      </div>
    </>
  );
}

export default Home;
