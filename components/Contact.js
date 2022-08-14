
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

export default class Contact extends Component {

    render() {
        return (
            <div>
            <h1 className="title">Contact</h1>
            <PrettyPar className="description">
            Email: sadiela@bu.edu
            </PrettyPar>
            <PrettyPar> 
            Twitter: @saddlepoint18
            </PrettyPar>
            <Prettylink target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">LinkedIn</Prettylink>
            <p></p>
            <Prettylink target="_blank" href="https://github.com/sadiela">GitHub</Prettylink>
          </div>
        )
    }
}