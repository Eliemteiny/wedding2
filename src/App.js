import React, { useEffect } from 'react';
import SlideShow from './components/SlideShow';
import './App.css';

const App = () => {
  useEffect(() => {
    const audioElement = document.getElementById('background-music');
    const playAudio = () => {
      audioElement.play().catch(error => {
        console.log("Audio play was prevented:", error);
      });
    };
    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="App">
      <audio id="background-music" loop>
        <source src="/music2.mp3" type="audio/mpeg" />
      </audio>
      <SlideShow />
    </div>
  );
};

export default App;
