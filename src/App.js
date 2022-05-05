import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import ScrollContainer from 'react-indiana-drag-scroll'
import data from './data'



const App = () => {


  const cards = data.map(item => {
    return (
      <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
    )
  })

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="w-[550px] font-poppins bg-white rounded-[9px]">
        <Navbar />
        <Hero />
        <ScrollContainer className="flex overflow-x-scroll scrollbar-hide	pb-[30px] px-9 gap-[18px]">
          {cards}
        </ScrollContainer>

      </div>
    </div>
  )
}

export default App;
