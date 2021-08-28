import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

export default function Controls(props) {

  return (
    <Container>
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
        </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  .play-btn{
    display: flex;
    margin: 0 30px;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8), -4px -4px 10px rgba(255, 255, 255, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.4), inset 4px 4px 10px rgba(255, 255, 255, 0.4);
    border: none;
    outline: none;
    background-color: #FFCE00;
    color: #FFF;
    font-size: 24px;
    cursor: pointer;
  }

  .skip-btn{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #888;
    font-size: 18px;
  }
`