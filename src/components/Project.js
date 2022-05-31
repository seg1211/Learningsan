import React, {useEffect, useState} from 'react'
import  sanityClient  from '../client'

function Project() {
  const [postData, setPostData]= useState(null)
  useEffect(()=>{
    sanityClient
    .fetch(`*[_type=="project"]{
      title,
      date,
      place,
      descriptoin,
      projectType,
      link,
      tags,
    }`)
    .then((data) => setPostData(data))
    .catch(console.error)
  }, [])
  return (
    <main>
      <section>
        {postData && postData.map((project,index)=>(
          <div>   
        <h3>
          <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
            {project.title}</a>
        </h3>
        <div>
          <span>Finished on: {""}
          {new Date(project.date).toLocaleDateString()}</span>
          <span>Company: {""}
          {project.place}</span>
          <span>Type: {""}
          {project.projectType}</span>
          <span>Description: {""}
          {project.description}</span>
        </div>
        <a href={project.link} rel="noopener noreferrer" target="_blank">POPAAAAAAAA</a>
        </div>     
        ))}
      </section>
    </main>
  )
} 

export default Project