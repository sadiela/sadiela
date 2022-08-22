
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'


export default class Contact extends Component {

    render() {
        return (
            <div>
                <Navigate/>
                <Layout>
                    <h1 style={{ fontFamily: 'monospace' }}>Contact</h1>
                    <p style={{ fontFamily: 'monospace' }}>
                    Email: sadiela@bu.edu
                    </p>
                    <p style={{ fontFamily: 'monospace' }}> 
                    Twitter: @saddlepoint18
                    </p>
                    <a target="_blank" href="https://www.linkedin.com/in/sadie-a-09629795/">LinkedIn</a>
                    <p></p>
                    <a target="_blank" href="https://github.com/sadiela">GitHub</a>
                </Layout>
            </div>
            
        )
    }
}