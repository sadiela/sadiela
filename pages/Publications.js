
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';
import {StyledLink} from '../styles/StyleConstants'


export default class Publications extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Publications</title>
                </Head>
                <Navigate/>
                <div class='biorow'>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }} >Publications</h1>
                    <StyledLink href="https://www.bu.edu/peaclab/files/2022/01/Tritium-woc21.pdf">Tritium: A Cross-layer Analytics System for Enhancing Microservice Rollouts in the Cloud</StyledLink>
                    <p></p>
                    <StyledLink href="https://www.bu.edu/peaclab/files/2021/02/Middleware2020_Poster_final.pdf">Version Detection for Software Discovery in the Cloud</StyledLink>
                    <p></p>
                    <StyledLink href="https://academic.oup.com/genetics/article/209/1/335/5931013?casa_token=L7USM6QvcOwAAAAA:2FvxD9-TUt3CvyyUyyHny54hllgaROoI43TlDOGm7v3oV3V_7XDXBDbLxN1ZE9-5z67RhYAoaGxy5Q">Genetic Drivers of Pancreatic Islet Function</StyledLink>
                </Layout>
                </div>
            </div>
            
        )
    }
}
