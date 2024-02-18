import React, { useRef, useEffect } from 'react';

const BackgroundAudio = ({ src }) => {
  const audioRef = useRef(null);
  
  useEffect(() => {
    audioRef.current.src = src;
    audioRef.current.play();
  }, [src]);

  return (
    <audio ref={audioRef} loop autoPlay />
  );
};

export default BackgroundAudio;