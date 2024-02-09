import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import passgen from "../assets/projects/passgen.png";
import snake from "../assets/projects/snake.png";
import weather from "../assets/projects/weather.png";
import tictactoe from "../assets/projects/tictactoe.png";

const Project = () => {
  const AllProjects = [
    {
      id: 1,
      src: passgen,
      name: "Password Generator",
      link: "https://umanghpasswordgenerator.netlify.app/",
      repo: "https://github.com/umanghalok/passwordGenerator",
    },
    {
      id: 2,
      src: weather,
      name: "Weather App",
      link: "https://umangh-live-weather.netlify.app/",
      repo: "https://github.com/umanghalok/live-weather",
    },
    {
      id: 3,
      src: snake,
      name: "Snake Game",
      link: "https://umangh-snake-game.netlify.app/",
      repo: "https://github.com/umanghalok/Snake-Game",
    },
    {
      id: 4,
      src: tictactoe,
      name: "Tic Tac Toe Game",
      link: "https://umangh-tic-tac-toe.netlify.app/",
      repo: "https://github.com/umanghalok/Tic-Tac-Toe",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen project"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my works!</p>
        </div>

        <Slider {...settings}>
          {AllProjects.map(({ id, src, name, link, repo }) => (
            <div key={id} className="slick-slide p-4">
              <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                <div className=" flex justify-center px-6 py-3 m-4">{name}</div>
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4" onClick={() => window.open(link, '_blank')}>
                    Live
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4" onClick={() => window.open(repo, '_blank')}>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
