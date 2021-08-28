import React from "react";
import {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Details(props) {

  return (
    <Container>
      <div className="details-img">
          <img src={props.song.img_src} alt=""/>
      </div>
      <div className="details-title">
        <h3>{props.song.title}</h3>
        <h4>{props.song.artist}</h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
`