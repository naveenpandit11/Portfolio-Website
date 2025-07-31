import React from 'react'
import {TypeAnimation} from 'react-type-animation'

function Home() {
  return (
    <section id='home' className="place-self-center w-full overflow-hidden h-[32rem] bg-[url('/src/assets/image.jpg')] bg-cover bg-center">
      <div className="m-10 flex flex-col justify-center w-full h-full px-6 lg:px-20">
        <h1 className=" md:text-4xl text-3xl font-raleway font-semibold  ">Naveen Pandit</h1>
        <div className='flex font-medium font-raleway'><span className='text-base md:text-xl'>I'm</span>
        <h2 className='ml-2 text-base md:text-xl'>
          <TypeAnimation
            sequence={[
              'Developer....',1000,
              'Designer....',1000,
              'Tech Enthusiast....',1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2></div>

      </div>
    </section>
  )
}

export default Home