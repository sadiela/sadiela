
import React, { Component } from 'react';
import styled from 'styled-components'

const Prettylink = styled.a`
    color: rgb(255, 0, 255);
    text-decoration: none;
    &:hover {
        color: rgb(105, 243, 255);
    };
`

const PrettyPar = styled.p`
    font-family: monospace;
`

export default class Publications extends Component {
    render() {
        return (
            <div>
            <h1 fontFamily='monospace' >Publications</h1>
            <Prettylink target="_blank" href="https://www.bu.edu/peaclab/files/2022/01/Tritium-woc21.pdf">Tritium: A Cross-layer Analytics System for Enhancing Microservice Rollouts in the Cloud</Prettylink>
            <p></p>
            <Prettylink target="_blank" href="https://www.bu.edu/peaclab/files/2021/02/Middleware2020_Poster_final.pdf">Version Detection for Software Discovery in the Cloud</Prettylink>
            <p></p>
            <Prettylink target="_blank" href="https://academic.oup.com/genetics/article/209/1/335/5931013?casa_token=L7USM6QvcOwAAAAA:2FvxD9-TUt3CvyyUyyHny54hllgaROoI43TlDOGm7v3oV3V_7XDXBDbLxN1ZE9-5z67RhYAoaGxy5Q">Genetic Drivers of Pancreatic Islet Function</Prettylink>
          </div>
        )
    }
}