
import React, { Component } from 'react';
import styles from '@styles/App.module.css'


export default class Contact extends Component {

    render() {
        return (
            <div>
            <h1 className="title">Contact</h1>
            <p className="description">
            Email: sadiela@bu.edu
            </p>
            <p> 
            Twitter: @saddlepoint18
            </p>
            <a className={styles.links} target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">LinkedIn</a>
            <p></p>
            <a className={styles.links} target="_blank" href="https://github.com/sadiela">GitHub</a>
          </div>
        )
    }
}