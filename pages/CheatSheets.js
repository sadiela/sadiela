
import React, { Component } from 'react';
import Layout from '@components/layout';
import Navigate from '@components/navigate'
import Head from 'next/head';
import {StyledLink} from '../styles/StyleConstants'


export default class CheatSheets extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Sadie Allen: Cheat Sheets</title>
                </Head>
                <Navigate/>
                <div class='biorow'>
                    <Layout>
                        <h1 className="title" style={{ fontFamily: 'monospace' }}>Cheat Sheets</h1>
                        <p style={{ fontFamily: 'monospace' }}>
                            Throughout college, I made a bunch of guides or "cheat sheets" for my engineering classes to help me study for tests. I've uploaded PDF versions as references for anyone who wants to use them! Hopefully I can type them up at some point as well.
                        </p>
                        <div class="row">
                        <div class="column" style={{paddingRight: '10px'}}>
                            <p></p>
                            <p><StyledLink href="cheatsheets/advanced_optimization.pdf">Advanced Optimization</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/data_structures_algorithms.pdf">Data Structures and Algorithms</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/differential_equations.pdf">Differential Equations</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/latin_grammar.pdf">Latin Grammar</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/linear_optimization.pdf">Linear Optimization</StyledLink></p>
                        </div>
                        <div class="column" style={{paddingLeft: '10px'}}>
                            <p></p>
                            <p><StyledLink href="cheatsheets/machine_learning.pdf">Machine Learning</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/multivariate_calculus.pdf">Multivariate Calculus</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/signals_and_systems.pdf">Signals and Systems</StyledLink></p>
                            <p></p>
                            <p><StyledLink href="cheatsheets/stochastic_processes.pdf">Stochastic Processes</StyledLink></p>
                        </div>
                        </div>
                    </Layout> 
                </div>          
            </div>
        
        )
    }
}