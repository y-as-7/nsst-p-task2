"use client";
import { useState, useRef } from "react";

import matrix from "matrix-js/lib";



// const a=Number(aRef.current.value)
// const b=Number(bRef.current.value)
// const c=Number(cRef.current.value)
// const d=Number(dRef.current.value)
// const e=Number(eRef.current.value)
// const f=Number(fRef.current.value)
// const g=Number(gRef.current.value)
// const h=Number(hRef.current.value)
// const j=Number(jRef.current.value)



function Page() {
  const aRef=useRef(null);
const bRef=useRef(null);
const cRef=useRef(null);
const dRef=useRef(null);
const eRef=useRef(null);
const fRef=useRef(null);
const gRef=useRef(null);
const hRef=useRef(null);
const jRef=useRef(null);

  const [a,setA]=useState(0);
  const [b,setB]=useState(0);
  const [c,setC]=useState(0);
  const [d,setD]=useState(0);
  const [e,setE]=useState(0);
  const [f,setF]=useState(0);
  const [g,setG]=useState(0);
  const [h,setH]=useState(0);
  const [j,setJ]=useState(0);
  var Mat1 = matrix([
    [a, b, c],
    [d, e, f],
    [g, h, j],
  ]).inv();
  
  const [Mat,setMat]=useState(null)
  
  const getInverse=(e)=>{
    e.preventDefault()
    setMat(Mat1)
    clear();
  }

  function clear(){
    aRef.current.value=null
    bRef.current.value=null
    cRef.current.value=null
    dRef.current.value=null
    eRef.current.value=null
    fRef.current.value=null
    gRef.current.value=null
    hRef.current.value=null
    jRef.current.value=null
  }

  return (
    <div className="mt-28 w-[80%] md:w-[600px] mx-auto">
      <div className="w-full text-center font-bold text-3xl text-red-700 capitalize mb-10">
        <h1>inver of matrix</h1>
      </div>
      {/* inputs */}
      <form action="">
      <div className=" relative mx-auto items-center ">
        <h1 className="text-center mb-4 text-red-600 capitalize text-xl">
          enter the value of the matrix (3*3)
        </h1>
        <div className="inputs flex  flex-col w-[100%] md:w-[600px]  mx-auto">
          {/* 1st row */}
          <div className="flex justify-around  mb-4">
            <input ref={aRef}
            onChange={e=>setA(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="a"
            />
            <input ref={bRef}
            onChange={e=>setB(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="b"
            />
            <input ref={cRef}
            onChange={e=>setC(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="c"
            />
          </div>
          {/* 2rd row */}
          <div className="flex justify-around  mb-4">
            <input ref={dRef}
            onChange={e=>setD(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="d"
            />
            <input ref={eRef}
            onChange={e=>setE(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="e"
            />
            <input ref={fRef}
            onChange={e=>setF(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="f"
            />
          </div>
          {/* 3rd row */}
          <div className="flex justify-around ">
            <input ref={gRef}
            onChange={e=>setG(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="g"
            />
            <input ref={hRef}
            onChange={e=>setH(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="h"
            />
            <input ref={jRef}
            onChange={e=>setJ(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="j"
            />
          </div>
        </div>
        <button 
        onClick={getInverse}
        className="text-center text-xl capitalize mx-auto w-[100%] md:w-[600px] mt-10 bg-gray-700 text-red-600 rounded py-2">
          get the inverse
        </button>
      </div>
      </form>
      {/* outputs */}
      {
        Mat?(
<div className="mx-auto flex flex-col justify-center">
        <div className="mt-2  text-center text-2xl text-red-700">
          <h1>matrix inverse</h1>
        </div>
        <div className="mt-5 text-xl text-red-600 flex flex-col justify-around ">
          
          <div className="flex justify-around  mb-3 ">
            <label>{Number(Mat[0][0]).toFixed(2)}</label>
            <label>{Number(Mat[0][1]).toFixed(2)}</label>
            <label>{Number(Mat[0][2]).toFixed(2)}</label>
          </div>
          <div className="flex justify-around mb-3">
            <label>{Number(Mat[1][0]).toFixed(2)}</label>
            <label>{Number(Mat[1][1]).toFixed(2)}</label>
            <label>{Number(Mat[1][2]).toFixed(2)}</label>
          </div>
          <div className="flex  justify-around">
            <label>{Number(Mat[2][0]).toFixed(2)}</label>
            <label>{Number(Mat[2][1]).toFixed(2)}</label>
            <label>{Number(Mat[2][2]).toFixed(2)}</label>
          </div>
        </div>
      </div>
        )
        :(
          <div>

          </div>
        )
      }
      
    </div>
  );
}

export default Page;
