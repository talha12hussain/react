import React from 'react'
import img from '../assets/tal.png'
import Button from './Button'

const Home = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundcolor'>
      <div className=' flex flex-col text-center items-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4'>
        <h1 className=' text-5xl font-semibold leading-tight mt-24'>
          I'm Talha Hussain
          <span className=' text-brightcolor'> Front-end </span> Developer
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique magnam maiores impedit nam voluptas itaque dolorem natus sunt blanditiis</p>
        <Button title='HIRE ME'></Button>
      </div>
      <div className=' mt-20'>
        <img width={570} src={img} alt="img" />
      </div>
      
      
    </div>
  )
}

export default Home
