
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import ReactPlayer from "react-player";
import Head from 'next/head';
import {StyledLink, MusicLink} from 'styles/StyleConstants';


export default class Music extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Music</title>
                </Head>
                <Navigate/>
                <div class='biorow'>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Music</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                    In my spare time, I like to write and produce my own songs with my good friend Sal Meblin under the pseudonym <a style={{color: "#588157", paddingRight: '3px', paddingLeft:'3px' }} target="_blank" href="https://open.spotify.com/artist/2yI5NePXpc9Q8v9x9vSqMB?si=QWZq8ynxRpCGth_RZYjfPQ">ESSE</a>. All of my songs were recorded in my apartment and produced in Ableton Live. I'm currently working on my first EP! Check out all of my released music below:
                    </p>
                    <div class="row">
                        <div class="column">
                            <div class='musiccontainer'> 
                            <img width={70} height={70} src="/imgs/chameleon_art.JPG" alt="Chameleon" />
                            <MusicLink href="https://open.spotify.com/track/1edrDCCYZnHl1ZITwbhZCv?si=0c96444f12cd4195">Chameleon</MusicLink>
                            </div>
                        <p></p>
                            <div class='musiccontainer'>
                            <img width={70} height={70} src="/imgs/postit_art.JPG" alt="Post-it Notes" />
                            <MusicLink href="https://open.spotify.com/track/79CMPiou9MRItInwoISxE2?si=601d0e7c35e14e9f"> Post-it Notes</MusicLink>
                            </div>
                        <p></p>
                        </div>
                        <div class="column">
                            <div class='musiccontainer'>
                            <img width={70} height={70} src="/imgs/fall_art.JPG" alt="Fall" />
                            <MusicLink href="https://open.spotify.com/track/2AnoStLX3FwUfguuSPOQEl?si=c4ba71de2f614fce"> Fall</MusicLink>
                            </div>
                        <p></p>
                            <div class='musiccontainer'>
                            <img width={70} height={70} src="/imgs/placeholder_art.jpg" alt="Placeholder" />
                            <MusicLink href="https://open.spotify.com/track/5dI1LlweTSR9VZ2ScDHFUx?si=8f409d8cf68048dc"> Placeholder</MusicLink>
                            </div>
                        </div>
                    </div>
                    <h1 style={{ fontFamily: 'monospace' }}>Personal Playlists</h1>
                    <p>Enjoy some hyper-specific playlists curated by me!</p>
                    <StyledLink href="https://open.spotify.com/playlist/2RfYWFbnkHNqK58NIuTS49?si=177955c615364eff">Men in *falsetto*</StyledLink>
                    <p></p>
                    <StyledLink target="_blank" href="https://open.spotify.com/playlist/1COJb3K43nLUrRnDAFheQT?si=f6ad6306aecb4b9e">Pure dopamine</StyledLink>
                    <p></p>
                    <StyledLink href="https://open.spotify.com/playlist/7nzTVJz9nX2t1vqP98QP1A?si=46c52f0a793a4001">Runner's high</StyledLink>
                </Layout>
                </div>
                
            </div>
            
        )
    }
}

/* 
<ReactPlayer
url="/Chameleon.wav"
width="400px"
height="50px"
playing={false}
controls={true}/>
*/
