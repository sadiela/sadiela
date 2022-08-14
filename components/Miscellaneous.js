import React, { Component } from 'react';
import styled from 'styled-components'

const linkStyle1 = {
    color: 'rgb(255, 0, 255)',
    textDecoration: 'none',
    fontFamily: 'monospace' ,
}

export default class Miscellaneous extends Component {

    render() {
        return (
            <div>
            <h1 style={{ fontFamily: 'monospace' }}>Miscellaneous</h1>
            <h2 style={{ fontFamily: 'monospace' }}>Podcast episodes that changed my life</h2>
            <a style={linkStyle1} target="_blank" href="https://open.spotify.com/episode/3S7sHKOxk0gh0gQn2eueH2?si=0f1bb886ea1d48e0">Hidden Brain: Eyes Wide Open Parts 1 and 2</a>
            <p></p>            
            <a style={linkStyle1} target="_blank" href="https://open.spotify.com/episode/6wvf1SoREJykZirFNVrkq4?si=f5b71680ed914e2e">Freakonomics Radio: 429. Is Economic Growth the Wrong Goal?</a>
            <p></p>            
            <a style={linkStyle1} target="_blank" href="https://open.spotify.com/episode/25o1anoDWqRA2JP932ejpl?si=a4498a059adc4fdc">Hidden Brain: Creating God</a>
          </div>
        )
    }
}


