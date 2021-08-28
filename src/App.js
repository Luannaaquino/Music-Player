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
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Love in the Sky",
      artist: "Eric Godlow",
      img_src: "./images/song-1.jpg",
      src: "./music/Love-in-the-Sky.mp3"
    },
    {
      title: "Lovely",
      artist: "Eric Godlow",
      img_src: "./images/song-1.jpg",
      src: "./music/Lovely.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);

  return (
    <AppContainer>
    <GlobalStyle/>
    <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
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
