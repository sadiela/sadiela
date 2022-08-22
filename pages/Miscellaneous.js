import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'


export default class Miscellaneous extends Component {

    render() {
        return (
            <div>
            <Navigate/>
            <Layout>
                <h1 style={{ fontFamily: 'monospace' }}>Miscellaneous</h1>
                <h2 style={{ fontFamily: 'monospace' }}>Podcast episodes that changed my life</h2>
                <a target="_blank" href="https://open.spotify.com/episode/3S7sHKOxk0gh0gQn2eueH2?si=0f1bb886ea1d48e0">Hidden Brain: Eyes Wide Open Parts 1 and 2</a>
                <p></p>            
                <a target="_blank" href="https://open.spotify.com/episode/6wvf1SoREJykZirFNVrkq4?si=f5b71680ed914e2e">Freakonomics Radio: 429. Is Economic Growth the Wrong Goal?</a>
                <p></p>            
                <a target="_blank" href="https://open.spotify.com/episode/25o1anoDWqRA2JP932ejpl?si=a4498a059adc4fdc">Hidden Brain: Creating God</a>
            </Layout>
            </div>
        )
    }
}


