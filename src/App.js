import React from "react";
import {useState, useEffect} from 'react';
import GlobalStyle from "./GlobalStyle";
import Player from "./components/Player";
import styled from 'styled-components';

function App() {

  const [songs, setSongs] = useState([
    {
      title: "KITSUNE",
      artist: "Kitsune",
      img_src: "./images/song-1.jpeg",
      src: "./music/KITSUNE.mp3"
    },
    {
      title: "Love in the Sky",
      artist: "Eric Godlow",
      img_src: "./images/song-2.jpeg",
      src: "./music/Love-in-the-Sky.mp3"
    },
    {
      title: "Lo Fi Blues",
      artist: "Kitsune",
      img_src: "./images/song-3.jpg",
      src: "./music/Lo-Fi-Blues.mp3"
    },
    {
      title: "Onion",
      artist: "LuKremBo",
      img_src: "./images/onion.jpg",
      src: "./music/Onion.mp3"
    },
    {
      title: "A Little Bit Of Love",
      artist: "Kitsune",
      img_src: "./images/song-4.jpg",
      src: "./music/A-Little-Bit-of-Love.mp3"
    },
    {
      title: "Moon",
      artist: "Eric Godlow",
      img_src: "./images/song-5.jpg",
      src: "./music/Moon.mp3"
    },
    {
      title: "Sad Joji",
      artist: "Chill Denis",
      img_src: "./images/song-6.png",
      src: "./music/Sad-Joji.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <AppContainer>
      <GlobalStyle/>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
