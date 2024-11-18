import React from 'react';
import '../App.css'
import banner_back from "../assets/banner_back.png"
import banner_car from "../assets/banner_img.png";

const Banner = () => {
  return (
    <section className='banner_Section relative'>
      <div className="bg-gradient-to-r from-blue-500"></div>
      <div className="relative flex items-center justify-center bg-cover bg-center h-100 sm:h-[30rem] md:h-[30rem] w-full" style={{ backgroundImage: `url(${banner_back})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl p-4 sm:p-8">
          <div className="text-white max-w-lg space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience Dubai <br /> on four wheels <br />with us!
            </h1>
            <p className="text-sm md:text-xl">
              Top-rated car rental in Dubai. Low prices, great deals, convenient pick-up, top-notch service!
            </p>
          </div>

          {/* <div
            className="absolute inset-0 mr-0 h-100"
            style={{
              clipPath: "polygon(40% -20%, 0% 60%, 40% 100%)",
              backgroundColor: "#dd2b1c", // Customize the color
            }}
          ></div> */}

          <div className="flex-shrink-0 mt-8 sm:mt-0 sm:ml-8 lg:mr-10">
            <img
              src={banner_car}
              alt="Car rental"
              className="w-72 md:w-96 lg:w-[36rem]"
            />

          </div>
        </div>
      </div>
    </section >
  )
}

export default Banner