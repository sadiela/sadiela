
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Image from 'next/image';
import {StyledLink} from '../styles/StyleConstants'

//<div style={{backgroundColor: 'pink', padding: '35px'}}>

export default class Bio extends Component {

    render() {
        return (
            <div>
                <Navigate></Navigate>
                <Layout>
                    <div class="row">
                        <div class="columnleft">
                            <Image style={{borderRadius: "50%"}}
                                src="/sadie_headshot_2.jpeg" // Route of the image file
                                height={300} // Desired size with correct aspect ratio
                                width={300} // Desired size with correct aspect ratio
                                alt="Sadie Allen"/>
                        </div>
                        <div class="columnright">
                                <h1 style={{ fontFamily: 'monospace', fontSize:'30px'}}>Sadie Allen</h1>
                                <p style={{ fontFamily: 'monospace' }}>
                                    I am a recent graduate with a Master’s in Computer Engineering from Boston University, eager to apply my skills and passion for technology to a career in a machine learning or software engineering role. As a driven, detail-oriented, and curious individual, I’m always looking for ways to deepen my understanding of computing and push the boundaries of what’s possible. I thrive in environments that challenge me and encourage continuous learning, whether it's coding, collaborating with a team, or diving into new systems.
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