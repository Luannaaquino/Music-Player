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
  .details-img{
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }

  .details-img img{
    display: block;
    margin: 50px auto;
    width: 100%;
    max-width: 250px;
    border-radius: 50%;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.4);
  }

  .details-img:after{
    content: '';
    display: block;
    position: absolute;
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
    border-radius: 50%;
    border: 3px dashed rgba(255, 206, 0, 1);
  }

  .details-title{
    color: #EEE;
    font-size: 28px;
    text-align: center;
    margin-bottom: 10px;

    h4{
      color: #AAA;
      font-size: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(255,255,255,0.4);
      text-align: center;
      margin-bottom: 20px;
    }
  }
`