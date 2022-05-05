import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center">
        <img src="../../images/photo-grid.png" alt="photo_grid" className="w-[395px] mt-[26px]" />
      </div>
      <div className="mt-8 ml-9">
        <h1 className="font-semibold text-[36px] text-black">Online Experiences</h1>
        <p className="mt-4 font-light text-base leading-[18px] text-[#222222] max-w-[320px]">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero;