"use client";
import React, { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Page = () => {
  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);

  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);

  function getSlove(e) {
    console.log(111111);
  }

  return (
    <div className="mt-28 w-full">
      <div className="w-[90%] md:w-[600px] mx-auto">
        {/* title  */}
        <div className="text-center capitalize text-3xl text-red-700 mb-10">
          <h1>slove quadratic equation</h1>
        </div>
        {/* main */}
        <div>
          <div className="flex flex-col" action="">
            <div className="flex justify-center items-center">
              <label
                className="mr-2 capitalize text-red-700 font-bold text-xl"
                htmlFor=""
              >
                equation:{" "}
              </label>
              <div className="flex items-center">
                <input
                  ref={aRef}
                  className="w-[30px] border-gray-700 text-center  outline-none mr-1 font-bold border-2 rounded"
                  type="number"
                />
                <label
                  className="text-red-600 capitalize text-2xl font-bold"
                  htmlFor=""
                >
                  X <sup>2</sup>
                </label>
              </div>
              <AiOutlinePlus className="mx-1" />
              <div className="flex items-center">
                <input
                  ref={bRef}
                  className="w-[30px] border-gray-700 text-center  outline-none mr-1 font-bold border-2 rounded"
                  type="number"
                />
                <label
                  className="text-red-600 capitalize text-2xl font-bold"
                  htmlFor=""
                >
                  X{" "}
                </label>
              </div>
              <AiOutlinePlus className="mx-1" />
              <div className="flex items-center">
                <input
                  ref={cRef}
                  className="w-[30px] border-gray-700 text-center  outline-none mr-1 font-bold border-2 rounded"
                  type="number"
                />
              </div>
            </div>

            <button
              onClick={getSlove}
              className="mt-10 bg-gray-600 text-red-500 w-[90%] md:w-[600px] py-2 rounded font-bold text-xl capitalize mx-auto"
            >
              slove
            </button>
          </div>
          {/* result */}
          <div className="mt-8 flex justify-around w-[90%] mx-auto">
            <h1 className="text-red-600 capitalize text-2xl font-bold">x= </h1>
            <h1 className="text-red-600 capitalize text-2xl font-bold">x= </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
