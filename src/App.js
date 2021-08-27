import React from "react";
import {useState, useEffect} from 'react';
import GlobalStyle from "./GlobalStyle";

function App() {

  const [song, setSong] = useState([
    {
      title: "KITSUNE",
      artist: "Kitsune",
      img_src: "./images/song-1.jpg",
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

  return (
    <>
    <GlobalStyle/>
      <h1>Teste</h1>
    </>
  );
}

export default App;
