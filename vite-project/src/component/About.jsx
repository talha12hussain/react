import React from 'react'
import SkillCard from './SkillCard'

const About = () => {
  const Skill1 = "w-11/12";
  const Skill2 = "w-4/5";
  const Skill3 = "w-2/3";
  return (
    <div className=' min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundcolor'>
      <div className='mt-16'>
        <h1 className=' text-4xl font-semibold text-center lg:mt-2'>About Me</h1>
      </div>
      <div className=' -mt-10'>
        <div className=' mb-10'>
          <h2 className=' text-3xl font-semibold'>I'm Talha Hussain</h2>
          <p className=' mt-4 lg:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem officiis
             magni quam nulla tenetur error. Enim, corporis molestiae quaerat quibusdam 
             nemo sapiente totam error soluta .
          </p>
        </div>
        <div>
          <h2 className=' text-3xl font-semibold'>My Skills</h2>
          <div>
            <SkillCard title="Html" width={Skill1} val="95%" />
            <SkillCard title="CSS" width={Skill2} val="85%" />
            <SkillCard title="JavaScript" width={Skill3} val="70%" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About
