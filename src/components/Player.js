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
`