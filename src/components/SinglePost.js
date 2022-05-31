import React, {useEffect,useState} from 'react'
import  sanityClient  from '../client'
import { useParams } from 'react-router-dom'
  import  ImageUrlBuilder  from '@sanity/image-url'
import BlockContent  from '@sanity/block-content-to-react'
const builder = ImageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const {slug}=useParams()
  useEffect(()=>{
    sanityClient.fetch(`
    *[slug.current=="${slug}"]{
      title,
      _id,
      mainImage{
        asset->{
          _id,
          url,
        }
      }, body,
      "name": author->name,
      "authorImage": author->image
    }
    `).then((data)=>setSinglePost(data[0]))
    .catch(console.error)
  }, [slug])
  if (!singlePost)return <div>Loading...</div>
  return (
    <div>
      <h1>{singlePost.title}</h1>
      <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name}/>
      <p>{singlePost.name}</p>
      <img src={singlePost.mainImage.asset.url}  alt={singlePost.title}/>
      <div>
        <BlockContent blocks={singlePost.body} projectId="hdh2r13p" dataset="production"/>
      </div>
    </div>
  )
}

export default SinglePost