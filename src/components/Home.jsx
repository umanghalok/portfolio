import React from "react";
import image from "../assets/image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-blue-800 to-black home"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={image}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className=" flex flex-col justify-center h-full md:mt-20 md:pt-20 ">
          <h2 className="lg:mx-0 mx-auto text-4xl sm:text-7xl font-bold text-white w-10/12">
            I'm a Full Stack <span className="text-pink-500">Web Developer</span>
          </h2>
          <p className="mx-4 text-center text-gray-300 py-4 lg:max-w-md">          
            Proficient in MERN stack development, adept at utilizing Express.js for backend, MongoDB for database management, and integrating these technologies seamlessly with React for dynamic frontend experiences.
          </p>

          <div className="projects-btn flex ml-10 lg:pr-20 lg:mr-20 justify-center">
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={image}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
