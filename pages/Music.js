
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import ReactPlayer from "react-player";


export default class Music extends Component {

    render() {
        return (
            <div>
                <Navigate/>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Music</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                    In my spare time, I like to write and produce my own songs with my good friend Sal Meblin under the pseudonym ESSE. All of my songs were recorded in my apartment and produced in Ableton Live. I'm currently working on my first EP! Check out all of my released music below:
                    </p>
                    <div> 
                    <img width={70} height={70} src="/chameleon_art.JPG" alt="Chameleon" />
                    <a target="_blank" href="https://open.spotify.com/track/1edrDCCYZnHl1ZITwbhZCv?si=0c96444f12cd4195">  Chameleon</a>
                    <ReactPlayer
                        url="/Chameleon.wav"
                        width="400px"
                        height="50px"
                        playing={false}
                        controls={true}
                    />
                    </div>
                    <p></p>
                    <div>
                    <img width={70} height={70} src="/postit_art.JPG" alt="Post-it Notes" />
                    <a target="_blank" href="https://open.spotify.com/track/79CMPiou9MRItInwoISxE2?si=601d0e7c35e14e9f">  Post-it Notes</a>
                    </div>
                    <p></p>
                    <div>
                    <img width={70} height={70} src="/fall_art.JPG" alt="Fall" />
                    <a target="_blank" href="https://open.spotify.com/track/2AnoStLX3FwUfguuSPOQEl?si=c4ba71de2f614fce">  Fall</a>
                    </div>
                </Layout>
            </div>
            
        )
    }
}
