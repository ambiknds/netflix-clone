import React, { useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios';
export default function Card(props) {
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`
    // console.log(imageUrl)
    const [video, setVideo] = useState('');
    const [isHovered, setIsHovered] = useState(false)
    const youtubeUrl = `https://www.youtube.com/embed/`;

    const handleMouseEnter = () => {
      setIsHovered(true)
    }
    const handleMouseLeave = () => {
      setIsHovered(false)
    }
      
    const fetchURL = async () => {
      try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      // console.log(response.data.videos.results[0].key)
      // console.log(response.data.videos.results[0].key)
      if(response.data.videos.results.length > 0) {
        setVideo(response.data.videos.results[0].key);
      }
    }
  catch(e) {
    console.log(e)
  }
}
// console.log('video',video)
    useEffect(() => {
      fetchURL();
    },[])
  return (
    <div className=''
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave} 
        >
        {!isHovered ?
       
       ( <img className='card-poster' src={imageUrl} alt='Poster'/>)
        
       : (
        <iframe
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='YouTube video player'
          width='100%'
          height='100%'
          frameborder='0'
          src={`${youtubeUrl}${video}`}
        ></iframe>
       )}
    </div>
  )
}
