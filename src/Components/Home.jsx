import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
const typedRef = useRef(null);
  useEffect(()=>{
    const options={
      strings:["Welcome to my Portfolio","I am Yashi","I am web developer","I am MERN stack developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true

    };
    const typed=new Typed(typedRef.current,options);
    return()=>{
      typed.destroy();
    }
  },[]);
  return (
    <>
    <div className="container home" id="home">
        <div className='left' data-aos="fade-up-right" data-aos-duration="1000" ><h2>I' am Yashi</h2><h1 ref={typedRef}></h1></div>
        <div className="right">
            <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                <img src="https://cdn.pixabay.com/photo/2024/02/22/11/02/woman-8589721_640.png" alt="image"  />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Home
