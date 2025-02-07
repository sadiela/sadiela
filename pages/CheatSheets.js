
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';

export default class CheatSheets extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Cheat Sheets</title>
                </Head>
                <Navigate/>
                <Layout>
                    <h1 className="title" style={{ fontFamily: 'monospace' }}>Cheat Sheets</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                        Throughout college, I made a bunch of guides or "cheat sheets" for my engineering classes to help me study for tests. I've uploaded PDF versions as references for anyone who wants to use them! Hopefully I can type them up at some point as well.
                    </p>
                    <p></p>
                    <p><a href="cheatsheets/data_structures_algorithms.pdf"> Data Structures and Algorithms</a></p>
                </Layout>
            </div>
        
        )
    }
}