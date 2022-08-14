
import React, { Component } from 'react';
import styled from 'styled-components'

const linkStyle1 = {
    color: 'rgb(255, 0, 255)',
    textDecoration: 'none',
    fontFamily: 'monospace',
}

const linkStyle2 = {
    color: 'rgb(255, 0, 255)',
    textDecoration: 'none',
    fontFamily: 'monospace',
}

export default class Contact extends Component {

    render() {
        return (
            <div>
            <h1 style={{ fontFamily: 'monospace' }}>Contact</h1>
            <p style={{ fontFamily: 'monospace' }}>
            Email: sadiela@bu.edu
            </p>
            <p style={{ fontFamily: 'monospace' }}> 
            Twitter: @saddlepoint18
            </p>
            <a style={linkStyle1} target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">LinkedIn</a>
            <p></p>
            <a style={linkStyle1} target="_blank" href="https://github.com/sadiela">GitHub</a>
          </div>
        )
    }
}