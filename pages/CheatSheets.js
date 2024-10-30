
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
                        Throughout college, I made a bunch of guides or "cheat sheets" for my engineering classes to help me study for tests. I've typed some of them up as references for anyone who wants to use them!
                    </p>
                    <p></p>
                    <p>Coming soon...</p>
                </Layout>
            </div>
        
        )
    }
}