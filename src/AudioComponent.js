import React, { useRef, useEffect, useState } from 'react';

const BackgroundAudio = ({ src }) => {
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      audioRef.current.play();
    }
  };

  useEffect(() => {
    audioRef.current.src = src;

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    }; //eslint-disable-next-line
  }, [src, userInteracted]);

  return (
    <audio ref={audioRef} loop autoPlay />
  );
};

export default BackgroundAudio;
