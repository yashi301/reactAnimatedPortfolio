import React from 'react'
import Html5Original from "react-devicons/html5/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import GitOriginal from "react-devicons/git/original"
import Css3Original from "react-devicons/css3/original";
import BootstrapOriginal from "react-devicons/bootstrap/original";
import NodejsOriginal from "react-devicons/nodejs/original";
import ExpressOriginal from "react-devicons/express/original";
import MongodbOriginal from "react-devicons/mongodb/original";
import MysqlOriginal from "react-devicons/mysql/original";
import CplusplusOriginal from "react-devicons/cplusplus/original";
import GithubOriginal from "react-devicons/github/original";
import TailwindcssOriginalWordmark from "react-devicons/tailwindcss/original-wordmark";
import ReactOriginal from "react-devicons/react/original";
const Skills = () => {
  return (
    <>
      <div className='container skills' id="skills">
    <h1>SKILLS</h1>
    
      <><br/><br/>
      <div className='items'>
        <div className='item'data-aos="flip-left" data-aos-duration="1000">
          <div>
          <Html5Original /><br/><span>HTML5</span>
          </div>
          <div><Css3Original /><br/><span>CSS3</span></div>
          <div><JavascriptOriginal/><br/><span>JavaScript</span></div>
          <div><ReactOriginal /><br/><span>React</span></div>
          <div> <BootstrapOriginal/><br/><span>Bootstrap</span></div>
          <div><NodejsOriginal /><br/><span>NodeJS</span></div>
          <div> <ExpressOriginal/><br/><span>ExpressJS</span></div>
          <div><MongodbOriginal/><br/><span>Mongodb</span></div>
          <div><MysqlOriginal/><br/><span>MySql</span></div>
          <div><TailwindcssOriginalWordmark/><br/><span>Tailwind CSS</span></div>
          <div><CplusplusOriginal /><br/><span>C++</span></div>
          <div><GitOriginal /><br/><span>Git</span> </div>
          <div><GithubOriginal /><br/><span>Github</span></div>
       
          
         
          
          
          
          
          
          

        </div>
      </div>
      </>
    
      </div>
      
    </>
  )
}

export default Skills
