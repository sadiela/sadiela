
import React, { Component } from 'react';
import styled from 'styled-components'

const linkStyle1 = {
    color: 'rgb(255, 0, 255)',
    textDecoration: 'none',
} 
export default class Publications extends Component {
    render() {
        return (
            <div>
            <h1 fontFamily='monospace' >Publications</h1>
            <a style={linkStyle1} target="_blank" href="https://www.bu.edu/peaclab/files/2022/01/Tritium-woc21.pdf">Tritium: A Cross-layer Analytics System for Enhancing Microservice Rollouts in the Cloud</a>
            <p></p>
            <a style={linkStyle1} target="_blank" href="https://www.bu.edu/peaclab/files/2021/02/Middleware2020_Poster_final.pdf">Version Detection for Software Discovery in the Cloud</a>
            <p></p>
            <a style={linkStyle1} target="_blank" href="https://academic.oup.com/genetics/article/209/1/335/5931013?casa_token=L7USM6QvcOwAAAAA:2FvxD9-TUt3CvyyUyyHny54hllgaROoI43TlDOGm7v3oV3V_7XDXBDbLxN1ZE9-5z67RhYAoaGxy5Q">Genetic Drivers of Pancreatic Islet Function</a>
          </div>
        )
    }
}