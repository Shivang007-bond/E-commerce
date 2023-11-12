import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around bg-black w-screen text-white p-6 text-md h-32">
      <div className="flex flex-col mx-4">
        <p>Any order related queries :- </p>
        <span>email -: e-shop@gmail.com</span>
        <span>phone -: 000-888-777</span>
      </div>
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Enter Email"
          className="h-8 w-72 border-2 border-white p-2 text-black rounded-md"
        />
        <button className="bg-red-900 text-white py-1 px-2 w-24 my-4 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
