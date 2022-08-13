
import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Bio from './Bio.js'
import Music from './Music'
import Publications from './Publications.js'
import Contact from './Contact.js'
import PersonalProjects from './PersonalProjects.js'
import Miscellaneous from './Miscellaneous.js'

export default function App() {
    return(
        <div className="App">
            <h1 class="maintitle" >Sadie Allen</h1>
            <img className="photo1" src='/sadie_headshot.JPG' alt="Sadie" />
            <Bio/>
            <Publications/>
            <PersonalProjects/>
            <Music/>
            <Miscellaneous/>
            <Contact/>
        </div>
    )
}