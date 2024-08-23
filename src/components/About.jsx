import React from "react";
import AboutImage from "../assets/DP.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences. Besides, I also have a good grip on Data Structures & Algorithms with problem solving skill
            </p>
            <p><span className="font-bold">Education <br/></span> BSc in <span className="font-semibold">Computer Science & Engineering</span> <br/> Shahjalal University of Science & Technology, Sylhet (SUST)</p>
            <p>2021-Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
