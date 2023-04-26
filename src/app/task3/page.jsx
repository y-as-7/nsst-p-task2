"use client";
import { useState, useRef } from "react";
import {RxCross1} from "react-icons/rx"
import matrix from "matrix-js/lib";




function Page() {
  const aRef1=useRef(null);
const bRef1=useRef(null);
const cRef1=useRef(null);
const dRef1=useRef(null);
const eRef1=useRef(null);
const fRef1=useRef(null);
const gRef1=useRef(null);
const hRef1=useRef(null);
const jRef1=useRef(null);

  const [a1,setA1]=useState(0);
  const [b1,setB1]=useState(0);
  const [c1,setC1]=useState(0);
  const [d1,setD1]=useState(0);
  const [e1,setE1]=useState(0);
  const [f1,setF1]=useState(0);
  const [g1,setG1]=useState(0);
  const [h1,setH1]=useState(0);
  const [j1,setJ1]=useState(0);

const aRef2=useRef(null);
const bRef2=useRef(null);
const cRef2=useRef(null);
const dRef2=useRef(null);
const eRef2=useRef(null);
const fRef2=useRef(null);
const gRef2=useRef(null);
const hRef2=useRef(null);
const jRef2=useRef(null);

  const [a2,setA2]=useState(0);
  const [b2,setB2]=useState(0);
  const [c2,setC2]=useState(0);
  const [d2,setD2]=useState(0);
  const [e2,setE2]=useState(0);
  const [f2,setF2]=useState(0);
  const [g2,setG2]=useState(0);
  const [h2,setH2]=useState(0);
  const [j2,setJ2]=useState(0);

  var Mat1 = matrix([
    [a1, b1, c1],
    [d1, e1, f1],
    [g1, h1, j1],
  ]);
  var Mat2 = matrix([
    [a2, b2, c2],
    [d2, e2, f2],
    [g2, h2, j2],
  ]);
  
  
  const [Mat,setMat]=useState(null)
  
  const getInverse=(e)=>{
    e.preventDefault()
    setMat(Mat1.prod(Mat2))
    clear();
  }

  function clear(){
    aRef1.current.value=null
    bRef1.current.value=null
    cRef1.current.value=null
    dRef1.current.value=null
    eRef1.current.value=null
    fRef1.current.value=null
    gRef1.current.value=null
    hRef1.current.value=null
    jRef1.current.value=null

    aRef2.current.value=null
    bRef2.current.value=null
    cRef2.current.value=null
    dRef2.current.value=null
    eRef2.current.value=null
    fRef2.current.value=null
    gRef2.current.value=null
    hRef2.current.value=null
    jRef2.current.value=null
  }

  return (
    <div className="mt-28 w-[80%] md:w-[600px] mx-auto">
      <div className="w-full text-center font-bold text-3xl text-red-700 capitalize mb-10">
        <h1>mutipule of matrix</h1>
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
            <input ref={aRef1}
            onChange={e=>setA1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="a"
            />
            <input ref={bRef1}
            onChange={e=>setB1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="b"
            />
            <input ref={cRef1}
            onChange={e=>setC1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="c"
            />
          </div>
          {/* 2rd row */}
          <div className="flex justify-around  mb-4">
            <input ref={dRef1}
            onChange={e=>setD1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="d"
            />
            <input ref={eRef1}
            onChange={e=>setE1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="e"
            />
            <input ref={fRef1}
            onChange={e=>setF1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="f"
            />
          </div>
          {/* 3rd row */}
          <div className="flex justify-around ">
            <input ref={gRef1}
            onChange={e=>setG1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="g"
            />
            <input ref={hRef1}
            onChange={e=>setH1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="h"
            />
            <input ref={jRef1}
            onChange={e=>setJ1(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="j"
            />
          </div>
        </div>
        
      </div>
      <div>
      <RxCross1 className="mt-5 text-red-700" />
      </div>
      <div className=" relative mx-auto items-center mt-5 ">
        
        <div className="inputs flex  flex-col w-[100%] md:w-[600px]  mx-auto">
          {/* 1st row */}
          <div className="flex justify-around  mb-4">
            <input ref={aRef2}
            onChange={e=>setA2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="a"
            />
            <input ref={bRef2}
            onChange={e=>setB2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="b"
            />
            <input ref={cRef2}
            onChange={e=>setC2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="c"
            />
          </div>
          {/* 2rd row */}
          <div className="flex justify-around  mb-4">
            <input ref={dRef2}
            onChange={e=>setD2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="d"
            />
            <input ref={eRef2}
            onChange={e=>setE2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="e"
            />
            <input ref={fRef2}
            onChange={e=>setF2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="f"
            />
          </div>
          {/* 3rd row */}
          <div className="flex justify-around ">
            <input ref={gRef2}
            onChange={e=>setG2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="g"
            />
            <input ref={hRef2}
            onChange={e=>setH2(e.target.value)}
              className="w-10 py-1 border border-3 outline-none border-gray800 rounded text-center "
              type="number"
              placeholder="h"
            />
            <input ref={jRef2}
            onChange={e=>setJ2(e.target.value)}
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
<div className="mx-auto flex flex-col justify-center mb-10">
        <div className="mt-2  text-center text-2xl text-red-700">
          <h1>matrix </h1>
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
