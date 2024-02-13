import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:mt-20 md:pt-24 pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-500">
            About
          </p>
        </div>
        <p className="text-xl">
        I'm a full-stack web developer pursuing expertise in the dynamic world of web development. With a keen eye for detail and a love for crafting intuitive digital experiences, I specialize in designing and implementing robust, user-centric solutions across the entire web development stack.
        </p>
        <p className="text-xl mt-5">
        I am a junior at Jadavpur University, Kolkata. I'm a quick learner and collaborate closely with like-minded people to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
