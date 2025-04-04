
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';
import {StyledLink} from '../styles/StyleConstants'


export default class PersonalProjects extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Personal Projects</title>
                </Head>
                <Navigate/>
                <div class='biorow'>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Personal Projects</h1>
                    <h2 style={{fontFamily:'monospace'}}><StyledLink href="https://github.com/sadiela/voiceleading-rl">Q-Harmony</StyledLink></h2>
                    <p>In this research project, I applied the Q-learning algorithm to the problem of voice leading in tonal harmony.</p>
                    <h2 style={{ fontFamily: 'monospace' }}><StyledLink href="https://github.com/sadiela/spotimy">Spotimy</StyledLink></h2>
                    <p style={{ fontFamily: 'monospace' }}>
                    Spotimy was my final project for my software engineering course. It allows users to filter their personal Spotify playlist according to "audio features" defined by Spotify's API and save these filtered playlists to their account. The front end is written in React and the backend uses Flask. It is currently in development mode. To get on the dev tester list, please email me at sadiela@bu.edu!
                    </p>
                    <h2 style={{ fontFamily: 'monospace' }}><StyledLink href="https://github.com/sadiela/contextcheck">ContextCheck</StyledLink></h2>
                    <p style={{ fontFamily: 'monospace' }}>
                    ContextCheck was the end product of my senior design project in undergrad. The crux of the project is a BERT-based learning algorithm that detects biased language in news articles. We created ContextCheck in the hopes of combating political polarization exacerbated by algorithms designed to maximize clicks. I plan to host ContextCheck publicly in the near future. 
                    </p>
                </Layout>
                </div>
            </div>
        )
    }
}