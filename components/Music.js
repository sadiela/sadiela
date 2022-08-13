
import React, { Component } from 'react';
import styles from '@styles/App.module.css'

export default class Music extends Component {

    render() {
        return (
            <div>
            <h1 className="title">Music</h1>
            <p className="description">
            In my spare time, I like to write and produce my own songs with my good friend Sal Meblin under the pseudonym ESSE. All of my songs were recorded in my apartment and produced in Ableton Live. I'm currently working on my first EP! Check out all of my released music below:
            </p>
            <div> 
            <img className={styles.photo} src="/chameleon_art.JPG" alt="Chameleon" />
            <a className={styles.links} target="_blank" href="https://open.spotify.com/track/1edrDCCYZnHl1ZITwbhZCv?si=0c96444f12cd4195">Chameleon</a>
            </div>
            <p></p>
            <div>
            <img className={styles.photo}  src="/postit_art.JPG" alt="Post-it Notes" />
            <a className={styles.links} target="_blank" href="https://open.spotify.com/track/79CMPiou9MRItInwoISxE2?si=601d0e7c35e14e9f">Post-it Notes</a>
            </div>
            <p></p>
            <div>
            <img className={styles.photo} src="/fall_art.JPG" alt="Fall" />
            <a className={styles.links} target="_blank" href="https://open.spotify.com/track/2AnoStLX3FwUfguuSPOQEl?si=c4ba71de2f614fce">Fall</a>
            </div>
          </div>
        )
    }
}
