import React from "react";
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Details from "./Details";
import Controls from "./Controls";

export default function Player(props) {
  const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

  return (
    <Container>
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <h4>Playing now</h4>
      <Details song={props.songs[props.currentSongIndex]}/>
      <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
      <p>Next up:<strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</strong></p>
    </Container>
  );
}

const Container = styled.div`
  display:block;
  background-color: #313131;
  padding: 50px;
  border-radius: 16px;

  h4{
    color: #FFF;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  }

  p{
    color: #AAA;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }

  p span{
    font-weight: 400;
  }
`