
import React, { Component } from 'react';
import Header from '@components/Header'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            devices:[]
        }
    }

    render() {
        return (
            <div>
            <Header title="Contact" />
            <p className="description">
            Email: sadiela@bu.edu
            </p>
            <p> 
            Twitter: @saddlepoint18
            </p>
            <a className="links" target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">LinkedIn</a>
            <p></p>
            <a className="links" target="_blank" href="https://github.com/sadiela">GitHub</a>
          </div>
        )
    }
}