import React from 'react'
import LinkedinOriginal from "react-devicons/linkedin/original";
import GithubOriginal from "react-devicons/github/original";
const Contact = () => {
  return (
    <>
      <div className='container contact' id="contact">
        <h1>
          Contact Me
        </h1>
        <div className='icons d-flex mx-10 p-3 justify-content-center align-items-center' style={{height:"200px"}} data-aos="zoom-in" data-aos-duration="1000">
        <div className='items_icon'><a href="https://www.linkedin.com/in/yashi-singh-5688a5223/"><LinkedinOriginal className='icon' /></a></div>
        <div className='items_icon'><a href="https://github.com/yashi301"><GithubOriginal className='icon'/></a> </div>
        </div>
      </div>
    </>
  )
}

export default Contact
