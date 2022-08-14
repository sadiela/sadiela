import React, { Component } from 'react';
import styled from 'styled-components'

const Prettylink = styled.a`
    color: rgb(255, 0, 255);
    text-decoration: none;
    &:hover {
        color: rgb(105, 243, 255);
    };
`

export default class Miscellaneous extends Component {

    render() {
        return (
            <div>
            <h1 className="title">Miscellaneous</h1>
            <h2>Podcast episodes that changed my life</h2>
            <Prettylink target="_blank" href="https://open.spotify.com/episode/3S7sHKOxk0gh0gQn2eueH2?si=0f1bb886ea1d48e0">Hidden Brain: Eyes Wide Open Parts 1 and 2</Prettylink>
            <p></p>            
            <Prettylink target="_blank" href="https://open.spotify.com/episode/6wvf1SoREJykZirFNVrkq4?si=f5b71680ed914e2e">Freakonomics Radio: 429. Is Economic Growth the Wrong Goal?</Prettylink>
            <p></p>            
            <Prettylink target="_blank" href="https://open.spotify.com/episode/25o1anoDWqRA2JP932ejpl?si=a4498a059adc4fdc">Hidden Brain: Creating God</Prettylink>
          </div>
        )
    }
}


