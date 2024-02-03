import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className=" mx-auto text-center bg py-8">
      <h1 className="pt-8 text-4xl font-serif font-semibold">
        <small className="">About</small> Us
      </h1>
      <p className="border-b-4 border-black w-[60px] mx-auto mt-4"></p>
      <div className="container pt-[60px] px-12 grid md:grid-cols-2 gap-4">
        <div className="">
          <p className="text-4xl mt-6 font-bold text-start">
            Our Dream Is Global Learning Transformation
          </p>
          <p className="mt-14 text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            dolorum animi quo tenetur obcaecati ipsum, suscipit alias,
            deleniti iusto, cupiditate explicabo. Nihil beatae, inventore
            consectetur itaque omnis quis tenetur facilis iusto quidem vitae
            vero voluptas error eius nisi saepe reiciendis earum porro amet.
            Illo, corrupti molestias rerum ex deserunt amet.
          </p>
        </div>
        <div className="container mx-auto">
          <img
            className="w-full h-auto rounded"
            src="https://i.ibb.co/vxRK318/about.jpg"
            alt="about"
          />
          <div className="grid md:grid-cols-2 gap-2 mt-4 py-4">
            <h1 className="text-3xl font-serif font-semibold text-center">
              50+ <small className="text-sm">Proj</small>
            </h1>
            <h1 className="text-3xl font-serif font-semibold text-center">
              70+ <small className="text-sm">Dev</small>
            </h1>
            <h1 className="text-3xl font-serif font-semibold text-center">
              30+ <small className="text-sm">Deal</small>
            </h1>
            <h1 className="text-3xl font-serif font-semibold text-center">
              10+ <small className="text-sm">Clients</small>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
