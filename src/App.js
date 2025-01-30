import { Carousel } from 'react-responsive-carousel';
import AudioComponent from './components/audio';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

import audio1 from './static/audio.mp3';
import img1 from './static/IMG_4900.JPG';
import img2 from './static/IMG_4949.JPG';
import img3 from './static/IMG_5018.JPG';
import img4 from './static/IMG_3508.JPG';
import img5 from './static/IMG_3543.JPG';
import img6 from './static/IMG_4953.JPG';
import img7 from './static/IMG_3841.jpg';
import gif1 from './static/YIPPE1.gif';

const pageStyling = {
  background: '#8fb6ab',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '100vh',
};

const gifStyling = {
  marginLeft: '100px',  
  animation: 'rotate 5s infinite'
};


const Valentine = () => {
  const audioSrc = audio1

  return (
    <nav style = {pageStyling}>

        <AudioComponent src = {audioSrc} />

        <div className = "container love-message">
          <h1>❤️I love you!❤️</h1>
          <img src = {gif1} alt = 'meandyoufr' style = {gifStyling} />
        </div>

        <Carousel
        className = "container carousel-container"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        >
      <div>
        <img src={img1} alt="i love you" />
      </div>
      <div>
        <img src={img2} alt="i love you" />
      </div>
      <div>
        <img src={img3} alt="i love you" />
      </div>
      <div>
        <img src={img4} alt="i love you" />
      </div>
      <div>
        <img src={img5} alt="i love you" />
      </div>
      <div>
        <img src={img6} alt="i love you" />
      </div>
      <div>
        <img src={img7} alt="i love you" />
      </div>
    </Carousel>
    </nav>
  );
};

export default Valentine;
