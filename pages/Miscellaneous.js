import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';


export default class Miscellaneous extends Component {

    render() {
        return (
            <div>
            <Head>
                <title>Sadie Allen: Miscellaneous</title>
            </Head>
            <Navigate/>
            <div class='contentbox'>
    
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Miscellaneous</h1>
                    <h2 style={{ fontFamily: 'monospace' }}>Podcast episodes that changed my life</h2>
                    <a target="_blank" href="https://open.spotify.com/episode/3S7sHKOxk0gh0gQn2eueH2?si=0f1bb886ea1d48e0">Hidden Brain: Eyes Wide Open Parts 1 and 2</a>
                    <p></p>            
                    <a target="_blank" href="https://open.spotify.com/episode/6wvf1SoREJykZirFNVrkq4?si=f5b71680ed914e2e">Freakonomics Radio: 429. Is Economic Growth the Wrong Goal?</a>
                    <p></p>            
                    <a target="_blank" href="https://open.spotify.com/episode/25o1anoDWqRA2JP932ejpl?si=a4498a059adc4fdc">Hidden Brain: Creating God</a>
                    <p></p>            
                    <a target="_blank" href="https://open.spotify.com/episode/1HrqYxTctwCWM0f1ie4m51?si=dd1d2c9f19b84d9b">Hidden Brain: Edge Effect</a>
                    <h2 style={{ fontFamily: 'monospace' }}>Books I've greatly enjoyed</h2>
                    <p><a style={{ paddingRight: '3px', paddingLeft:'3px' }} target="_blank" href="https://wwnorton.com/books/9780393652208">Useful Delusions - Shankar Vedantam</a>: The ways in which our own brain deceives us and how we can leverage them.</p>
                    <p></p>
                    <p><a style={{ paddingRight: '3px', paddingLeft:'3px' }} target="_blank" href="https://www.goodreads.com/book/show/53487334-the-best-of-me">The Best of Me - David Sedaris</a>: Hilarious and heartbreaking essays.</p>
                    <p></p>            
                    <p><a style={{ paddingRight: '3px', paddingLeft:'3px' }} target="_blank" href="https://www.goodreads.com/en/book/show/56353777-the-cabinet#CommunityReviews">The Cabinet - Un Su Kim</a>: Surreal mosaic novel about strange people who seem to have evolved past human norms.</p>
                    <p></p> 
                    <p><a style={{ paddingRight: '3px', paddingLeft:'3px' }} target="_blank" href="https://carolinecriadoperez.com/book/invisible-women/">Invisible Women - Caroline Criado Perez</a>: Compelling evidence of the gender data gap and the damage it causes to women and society as a whole.</p>
                </Layout>
            </div>
            </div>
        )
    }
}


