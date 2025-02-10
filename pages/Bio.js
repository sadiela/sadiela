
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Image from 'next/image';
import {StyledLink} from '../styles/StyleConstants'

export default class Bio extends Component {

    render() {
        return (
            <div>
                <Navigate/>
                <Layout>
                <h1 style={{ fontFamily: 'monospace', fontSize:'40px'}}>Sadie Allen</h1>

                <div class="row">
                <div class="column">
                    <Image style={{borderRadius: "50%"}}
                        src="/sadie_headshot.jpg" // Route of the image file
                        height={250} // Desired size with correct aspect ratio
                        width={250} // Desired size with correct aspect ratio
                        alt="Sadie Allen"/>
                </div>
                <div class="column">
                    <p style={{ fontFamily: 'monospace' }}>
                        I am a recent M.S. graduate from Boston University with a degree in Computer Engineering. I am seeking a full-time position in a machine learning or software engineering role.   
                    </p>
                    <p style={{ fontFamily: 'monospace' }}>
                        In my free time, I enjoy running, hiking, singing, and writing and producing music. 
                    </p>
                    <p></p>
                    <StyledLink href="/sadie_allen_cv_2024_public.pdf"> Curriculum Vitae </StyledLink>
                    <p></p>
                    <StyledLink href="/sadie_allen_resume_2025.pdf"> Resume </StyledLink>
                </div>
                </div>


                </Layout>
            </div>
        
        )
    }
}
