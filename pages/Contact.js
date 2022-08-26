
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';

export default class Contact extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Contact</title>
                </Head>
                <Navigate/>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Contact</h1>
                    <p style={{ fontFamily: 'monospace' }}>Email: <a href="mailto:sadiela@bu.edu">sadiela@bu.edu</a></p>
                    <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">Sadie Allen</a></p>
                    <p>Github: <a target="_blank" href="https://github.com/sadiela">sadiela</a></p>
                    <p>Twitter: <a target="_blank" href="http://twitter.com/saddlepoint18">@saddlepoint18</a></p>
                </Layout>
            </div>
            
        )
    }
}