import React, {useEffect, useState} from 'react'
import  sanityClient  from '../client.js'
import  ImageUrlBuilder  from '@sanity/image-url'
import BlockContent  from '@sanity/block-content-to-react'
const builder = ImageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
function About() {
  const [author, setAuthor] = useState(null)
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type=="author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }
    `).then ((data)=>setAuthor(data[0]))
    .catch(console.error)
  },[])
  if (!author) return <div>Loading</div>
  return (
    <div>
      <img src={urlFor(author.authorImage).url()} alt={author.name}/>
      <h1> {author.name}</h1>
      <div>
        <BlockContent blocks={author.bio} projectId="hdh2r13p" dataset="production"/>
      </div>
    </div>
  )
}

export default About