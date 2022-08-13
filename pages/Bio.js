
import React, { Component } from 'react';
import Header from '@components/Header'

export default class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            devices:[]
        }
    }

    render() {
        return (
            <div>
            <Header title="Bio" />
            <p className="description">
                I am a second-year computer engineering PhD student at Boston University interested primarily in applying deep learning methods to music. I want to design tools that use machine learning to assist artists and producers in the creative process. My current research focuses on controllable symbolic music generation. I am also very interested in the ethics and fairness of machine learning.  
            </p>
            <p>
                In my free time, I enjoy running, hiking, singing, and writing and producing music. I am also a fan of board games and word games like Boggle and Bananagrams. 
            </p>
          </div>
        )
    }
}