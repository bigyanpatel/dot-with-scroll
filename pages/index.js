import React from 'react';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-pink-500 to-blue-300 h-[100vh] relative w-full pb-[100px] pt-14">
        <div className="absolute left-[30%] top-1/2 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(35%-80px)] md:left-[calc(30%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-md'>
            Section-1
          </p>
          <span className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-300 to-green-300 h-[100vh] relative w-full pb-[100px] pt-14">
        <div className="absolute left-[30%] top-0 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(35%-80px)] md:left-[calc(30%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-md'>
            Section-2
          </p>
          <span className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-b from-green-300 to-yellow-300 h-[100vh] relative w-full pb-[100px] pt-14">
        <div className="absolute left-[30%] top-0 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(35%-80px)] md:left-[calc(30%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-md'>
            Section-3
          </p>
          <span className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-b from-yellow-300 to-red-400 h-[100vh] relative w-full pb-[100px] pt-14">
        <div className="absolute left-[30%] top-0 bottom-1/2 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(35%-80px)] md:left-[calc(30%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-md'>
            Section-4
          </p>
          <span className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full"></span>
        </div>
      </div>
    </>
  );
}
