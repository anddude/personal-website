import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Profile2 from "../assets/images/Profile2.jpg";
import KidComputer from "../assets/images/KidComputer.jpg";
import Hiking from "../assets/images/Hiking.jpg";



export default function About() {
  return (
    <>
    <Navbar />
       <div className="flex grow animate-fade-in ">

    <main className="p-6 max-w-4xl mx-auto text-sunset container">
          <title>About</title>
          <h1>ABOUT</h1>
          <div className="grid justify-items-center items-center">
            <p className=" text-sm text-center md:text-lg font-thasadith my-8">Who I am is wrapped up in what I chase: the rabbit holes I fall down, the side projects I lose sleep over, the stories I can’t stop exploring. This page is a thread through the creative detours and obsessions that shaped how I think and how I create.</p>
          </div>
          
            <div className="grid md:grid-cols-2 md:gap-2 lg:gap-4 gap-y-8 items-center justify-items-center p-4 md:p-8">
        

              <div className="order-1 p-1 md:p-5">
                <div className="image-details-effect w-fit relative group">
                  <img src={Profile2} alt="Profile" className="mx-auto w-80 h-64 object-cover rounded-sm shadow-md image-to-dim"/>
                    <div className="overlay-text font-space text-xs md:text-xs lg:text-xs">Candid Photo by &nbsp;<a href="https://www.brianroedel.com/" className="no-underline effect-underline">Brian Roedel</a></div>
                </div> 
              </div>

              <div className="order-2 bg-cobalt/50 p-5 mx-auto justify-center rounded-xl relative group hover:scale-102 transition-transform duration-200">
                <h2>THE BUILDER</h2>
                <p className="font-thasadith text-center">In a world of infinite possibilities, I’ve always chosen to be a builder—of stories, community, and now, software. Whether I was crafting films from the ground up, hosting comedy shows, or fundraising for non-profits, I’ve always been drawn to world-building: imagining what could be, then making it real.</p>
              </div>

            
              <div className="order-4 md:order-3 p-5 mx-auto justify-center border border-smoke rounded-lg relative group hover:scale-102 transition-transform duration-200">
                <h2>THE JOURNEY</h2>
                <p className="font-thasadith text-center">My journey into tech started early—customizing clunky Freewebs templates as a kid just to share my suburban musings online. While working in production, I kept returning to tech—fixing workflows, updating websites, and dreaming up tools to streamline the chaos. That spark eventually became a full pivot. I dove into YouTube tutorials, devoured algorithm books, and worked my way through Harvard’s CS50 and freeCodeCamp, building whimsical, interactive websites from scratch to sharpen my skills.</p>
              </div>

              <div className="order-3 md:order-4">
                <div className=" image-details-effect relative group">
                  <img src={KidComputer} alt="Young Annie at a computer" className="p-px mx-auto mb-6 w-80 h-64 object-cover rounded-sm shadow-md image-to-dim"/>
                  <div className="overlay-text font-space">Young Annie at a Computer</div>
                </div>
              </div>

              <div className="order-5">
                <div className="image-details-effect relative group">
                <img src={Hiking} alt="Hiking" className="p-px  mx-auto mb-6 w-80 h-64 object-cover rounded-sm shadow-md image-to-dim"/>
                <div className="overlay-text font-space">Here's to looking at you, view!</div>
                </div>
              </div>

              <div className="order-6 bg-cobalt/50 p-5 mx-auto justify-center rounded-xl hover:scale-102 transition-transform duration-200">
                <h2>THE FUTURE</h2>
                <p className="font-thasadith text-center">To me, software engineering is just another form of storytelling: crafting immersive, intuitive systems that invite others in. Now, I’m looking for my first opportunity as a software engineer—ready to bring my production-honed problem-solving and scrappy DIY mindset to a collaborative team. Whether it’s building polished user experiences, tackling tricky bugs, or contributing to thoughtful digital products, I’m eager to dive in and make an impact.</p>
              </div>

      
            </div>
            <div className="justify-center relative group border border-smoke rounded-lg mt-8 hover:scale-102 transition-transform duration-200">
                <h2>THE HUMAN</h2>
                <p className="font-thasadith text-center pb-5">When I'm not working on a project, you can find me learning to swing dance, going on walks around my with my dog, <br />or reading a wide range of books — among other things!</p>
              </div>
    </main>
    </div>
    <Footer />
    </>
  );
}