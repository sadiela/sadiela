
import React from 'react'
import Bio from '@components/Bio.js'
import Music from '@components/Music'
import Publications from '@components/Publications.js'
import Contact from '@components/Contact.js'
import PersonalProjects from '@components/PersonalProjects.js'
import Miscellaneous from '@components/Miscellaneous.js'
import styles from './App.module.css'


export default function App() {
    return(
        <div className={styles.App}>
            <h1 style={{ fontFamily: 'monospace', fontSize:'40px'}}>Sadie Allen</h1>
            <img width={120} height={120} src='/sadie_headshot.JPG' alt="Sadie" />
            <Bio/>
            <Publications/>
            <PersonalProjects/>
            <Music/>
            <Miscellaneous/>
            <Contact/>
        </div>
    )
}