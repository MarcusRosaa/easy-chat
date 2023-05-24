import React, { useEffect, useRef } from 'react';
import { Container } from './styles';


const VideoMessage: React.FC = () => {

  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    if (videoContainer) {
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/4890008e-a86d-404c-acf2-8732008dd7ea/players/6467d0a665ce7000094b0c80/player.js";
      script.async = true;
      videoContainer.appendChild(script);
    }
  }, []);

  return (
    <Container>
      <div ref={videoContainerRef} id="vid_6467d0a665ce7000094b0c80" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0', maxHeight: '300px' }}>
      <img
        id="thumb_6467d0a665ce7000094b0c80"
        src="https://images.converteai.net/4890008e-a86d-404c-acf2-8732008dd7ea/players/6467d0a665ce7000094b0c80/thumbnail.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
        alt="Video Thumbnail"
      />
      <div id="backdrop_6467d0a665ce7000094b0c80" style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        WebkitBackdropFilter: 'blur(5px)',
        backdropFilter: 'blur(5px)'
      }}></div>
    </div>
    </Container>
  )
}

export default VideoMessage;