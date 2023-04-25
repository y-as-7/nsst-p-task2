"use client"
import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
AiOutlineClose;
import { useState,useEffect } from "react";
export default function Header() {
  
  const [humb, setHumb] = useState(false);
  useEffect(()=>{
    
  })
  
  return (
    <header className="bg-[#151a25] text-white fixed top-0 left-0 right-0 w-full z-10">
      <nav className="flex justify-between px-4 py-5 w-full">
        {/* start logo */}
        <div>
          <Link href="/">
            <h1 className="text-4xl uppercase">
              <span className="text-red-700">N</span>S
              <span className="text-red-700">S</span>T
            </h1>
          </Link>
        </div>
        {/* end logo */}

        {/* nav items */}
        <div className={`md:flex md:flex-row   ${humb ? "inline" : "hidden"}`}>
          <ul
            className={`
            } md:flex md:flex-row md:static space-y-0 md:h-full    items-center md:py-0 md:mt-0 h-[100vh] transition duration-1000 bg-[#151a25] 
             ${
               humb
                 ? "animate-[wiggle_1s_ease] py-20 items-center  flex flex-col absolute  left-0  w-full mt-10  transition duration-1000 ease-linear text-center text-5xl space-y-10 "
                 : "animate-[close_2s_ease]  hidden md:h-6  "
             }`}
          >
            <li>
              <Link
                onClick={() => setHumb(false)}
                className="capitalize text-2xl mx-3 hover:text-red-600 transition duration-300"
                href="/task1"
              >
                task1
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setHumb(false)}
                className="capitalize text-2xl mx-3 hover:text-red-600 transition duration-300"
                href="/task2"
              >
                task2
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setHumb(false)}
                className="capitalize text-2xl mx-3  hover:text-red-600 transition duration-300"
                href="/task3"
              >
                task3
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setHumb(false)}
                className="capitalize text-2xl mx-3  hover:text-red-600 transition duration-300"
                href="/task4"
              >
                task4
              </Link>
            </li>
          </ul>
        </div>
        {/* end van items */}
        {/* start humb */}
        <div className="animate-spin  z-10 flex items-center md:hidden inline">
          {humb ? (
            <AiOutlineClose
              onClick={() => setHumb(!humb)}
              className="text-red-800 text-4xl border-white border-2 p-1 rounded-full cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setHumb(!humb)}
              className="text-red-800 text-4xl border-white border-2 p-1 rounded-full cursor-pointer"
            />
          )}
        </div>
        {/* end humb */}
      </nav>
    </header>
  );
}
