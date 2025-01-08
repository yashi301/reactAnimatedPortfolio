import React from "react";
import project from "./data/project.json";
const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center card-upper" data-aos="flip-right" data-aos-duration="1000">
          {project.map((data) => (
            <>
              <div key={data.id} className="my-3 col-md-6 col-sm-6 col-lg-3 mx-3 p-lg-3 p-md-5 p-sm-2 ">
                <div className="card">
                  <div className="img d-flex justify-content-center align-items-center p-3 ">
                  <img src={data.imageSrc} className="card-img-top" alt="..."  style={{width:"200px",height:"200px",border:"2px solid rgb(0, 200, 255)",boxShadow:"0px 0px 10px rgb(0, 200, 255)"}}/>
                  </div>
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      {data.description}
                    </p>
                    <a href={data.demo} className="btn btn-primary ms-auto">
                     {data.demo}Demo
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        
  
      </div>
    </>
  );
};

export default Projects;
