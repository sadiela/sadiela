
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import {GitHubLink, ImageLink} from '@components/githublink';
import Image from 'next/image';
import {StyledLink} from '../styles/StyleConstants'

//<div style={{backgroundColor: 'pink', padding: '35px'}}>

export default class Bio extends Component {

    render() {
        return (
            <div>
                <Navigate/>
                <div class="biorow">
                <Layout>
                <div class="biorow2">
                        <div class="columnleft">
                            <Image style={{borderRadius: "50%"}}
                                src="/imgs/sadie_headshot_2.jpeg" // Route of the image file
                                height={300} // Desired size with correct aspect ratio
                                width={300} // Desired size with correct aspect ratio
                                alt="Sadie Allen"/>    
                            <div class="photolinks_div">                  
                            <ImageLink image={"/imgs/gmail_logo.png"} link={"mailto:sadiela@bu.edu"} width={40}/>
                            <ImageLink image={"/imgs/linkedin_logo.png"} link={"https://www.linkedin.com/in/sadie-a-09629795/"} width={40}/>
                            <ImageLink image={"/imgs/github_clean_2.png"} link={"https://github.com/sadiela"} width={40}/>
                            </div>  
                        </div>
                        <div class="columnright">
                                <h1 style={{ fontFamily: 'monospace', fontSize:'30px'}}>Sadie Allen</h1>
                                <p style={{ fontFamily: 'monospace' }}>
                                    I am a recent graduate with a Master’s in Computer Engineering from Boston University, eager to apply my skills and passion for technology to a career in a data science, machine learning or software engineering role. As a driven, detail-oriented, and curious individual, I’m always looking for ways to deepen my understanding of computing and push the boundaries of what’s possible. I thrive in environments that challenge me and encourage continuous learning, whether it's coding, collaborating with a team, or diving into new systems.
                                </p>
                                <p style={{ fontFamily: 'monospace' }}>
                                    In my free time, I enjoy running, hiking, singing, and writing and producing music. 
                                </p>
                                <p></p>
                                <StyledLink href="/resumes_cvs/sadie_allen_resume_5_2025.pdf"> Resume </StyledLink>
                        </div>
                        </div>
                </Layout>
                </div>
                </div>        
        )
    }
}