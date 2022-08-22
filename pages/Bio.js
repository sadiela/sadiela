
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Image from 'next/image';

export default class Bio extends Component {

    render() {
        return (
            <div>
                <Navigate/>
                <Layout>
                <h1 style={{ fontFamily: 'monospace', fontSize:'40px'}}>Sadie Allen</h1>
                    <Image
                    src="/sadie_headshot.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Sadie Allen"
                    />
                    <h1 className="title" style={{ fontFamily: 'monospace' }}>Bio</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                        I am a second-year computer engineering PhD student at Boston University interested primarily in applying deep learning methods to music. I want to design tools that use machine learning to assist artists and producers in the creative process. My current research focuses on controllable symbolic music generation. I am also very interested in the ethics and fairness of machine learning.  
                    </p>
                    <p style={{ fontFamily: 'monospace' }}>
                        In my free time, I enjoy running, hiking, singing, and writing and producing music. I am also a fan of board games and word games like Boggle and Bananagrams. 
                    </p>
                    <p></p>
                    <a href="/sadie_allen_resume_2022_ENG.pdf"> Resume </a>
                    <p></p>
                    <a href="/sadie_allen_cv_2022.pdf"> Curriculum Vitae </a>
                </Layout>
            </div>
        
        )
    }
}