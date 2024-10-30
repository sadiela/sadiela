
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
                    height={150} // Desired size with correct aspect ratio
                    width={150} // Desired size with correct aspect ratio
                    alt="Sadie Allen"/>
                    <h1 className="title" style={{ fontFamily: 'monospace' }}>Bio</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                        I am a recent M.S. graduate from Boston University with a degree in Computer Engineering. I am seeking a full-time position in a machine learning or software engineering role.   
                    </p>
                    <p style={{ fontFamily: 'monospace' }}>
                        In my free time, I enjoy running, hiking, singing, and writing and producing music. 
                    </p>
                    <p></p>
                    <a href="/sadie_allen_cv_2024_public.pdf"> Curriculum Vitae </a>
                </Layout>
            </div>
        
        )
    }
}