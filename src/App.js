import React from "react";
import {useState, useEffect} from 'react';
import GlobalStyle from "./GlobalStyle";
import Player from "./components/Player";

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
    <>
    <GlobalStyle/>
    <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </>
  );
}

export default App;
