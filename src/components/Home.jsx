import React from 'react'
import {TypeAnimation} from 'react-type-animation'
function Home() {
  return (
    <section id='home' className="place-self-center w-full overflow-hidden h-[32rem] bg-[url('https://casf.com.au/wp-content/uploads/2022/01/silver_grey.png')] bg-cover bg-center">
      <div className="m-10 flex flex-col justify-center w-full h-full px-6 lg:px-20">
        <h1 className="lg:text-5xl sm:text-3xl text-white font-raleway font-semibold  ">Naveen Pandit</h1>
        <div className='flex text-white font-medium font-raleway'><span>I'm</span>
        <h2 className='ml-2 underline'>
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