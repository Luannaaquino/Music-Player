import React from "react";
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Details from "./Details";
import Controls from "./Controls";

export default function Player(props) {

  return (
    <Container>
      <audio></audio>
      <h4>Playing now</h4>
      <Details song={props.song}/>
      <Controls/>
      <p><strong>Next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
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