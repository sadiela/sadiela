
import React, { Component } from 'react';

export default class Bio extends Component {

    render() {
        return (
            <div>
            <h1 className="title">Bio</h1>
            <p style={{ fontFamily: 'monospace' }}>
                I am a second-year computer engineering PhD student at Boston University interested primarily in applying deep learning methods to music. I want to design tools that use machine learning to assist artists and producers in the creative process. My current research focuses on controllable symbolic music generation. I am also very interested in the ethics and fairness of machine learning.  
            </p>
            <p fontFamily='monospace'>
                In my free time, I enjoy running, hiking, singing, and writing and producing music. I am also a fan of board games and word games like Boggle and Bananagrams. 
            </p>
          </div>
        )
    }
}