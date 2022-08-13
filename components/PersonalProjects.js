
import React, { Component } from 'react';
import styles from './App.module.css'

export default class PersonalProjects extends Component {

    render() {
        return (
            <div>
            <h1>Personal Projects</h1>
            <h2>Spotimy</h2>
            <p className="description">
            Spotimy was my final project for my software engineering course. It allows users to filter their personal Spotify playlist according to "audio features" defined by Spotify's API and save these filtered playlists to their account. It is currently in development model. To get on the dev tester list, please email me at sadiela@bu.edu!
            </p>
            <a className={styles.links} target="_blank" href="http://spotimy.net/">Spotimy</a>
            <h2>ContextCheck</h2>
            <p>
            ContextCheck was the end product of my senior design project in undergrad. The crux of the project is a BERT-based learning algorithm that detects biased language in news articles. We created ContextCheck in the hopes of combating political polarization exacerbated by algorithms designed to maximize clicks. I plan to host ContextCheck publicly in the near future. 
            </p>
            </div>
        )
    }
}