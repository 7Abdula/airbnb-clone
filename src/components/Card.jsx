import React from 'react'


const Card = (props) => {
  return (
    <section className="mt-[49px]">
      <div className="w-[177px]">
        <div className="relative">
          <img src={`../../images/${props.img}`} alt={props.title} className="max-w-[176px]" />
          <p className="absolute top-[6px] left-[6px] bg-white py-1 px-[6px] text-[10.24px] rounded-sm text-[#222222]">SOLD OUT</p>
        </div>
        <div className="mt-[9px] flex items-center">
          <img src="../../images/star.png" alt="start-icon" className="w-[14px] h-[14px] mr-1" />
          <p className="text-xs text-[#222222] font-light">{props.rating} <span className="text-[#918E9B]">({props.reviewCount}) &#8226; {props.location}</span></p>
        </div>
          <p className="mt-2 font-light text-[#222222] text-xs">{props.title}</p>
          <p className="mt-2 text-[#222222] text-xs font-semibold">From ${props.price} <span className="font-light"> / person</span></p>
      </div>
    </section>
  )
}

export default Card;