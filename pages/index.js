import React from 'react';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-[100vh] relative w-full pb-[100px]">
        <div className="absolute left-[50%] top-1/2 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(50%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-xl'>
            Section-1
          </p>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-green-400 h-[100vh] relative w-full pb-[100px]">
        <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(50%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-xl'>
            Section-2
          </p>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-300 to-yellow-300 h-[100vh] relative w-full pb-[100px]">
        <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(50%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-xl'>
            Section-3
          </p>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full"></span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 h-[100vh] relative w-full pb-[100px]">
        <div className="absolute left-[50%] top-0 bottom-1/2 w-0.5 bg-white"></div>
        <div className="sticky top-1/2 h-auto w-full">
          <p className='absolute left-[calc(50%-100px)] transform -translate-x-1/2 -translate-y-1/2 font-bold capitalize text-xl'>
            Section-4
          </p>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full"></span>
        </div>
      </div>
    </>
  );
}
