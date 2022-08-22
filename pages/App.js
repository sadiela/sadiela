
import React from 'react'
import Bio from './Bio.js'
import styles from './App.module.css'
import Head from 'next/head';

export default function App() {
    return(
        <div className={styles.App}>
          <Head>
            <title>Home Page</title>
          </Head>
            <Bio/>
        </div>
    )
}

        
        
       /*<Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component}
          <Route exact path="/" component={Bio} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component}
          <Route path="/music" component={Music} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component}
          <Route path="/publications" component={Publications} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" }
          <Redirect to="/" />
        </Switch>
      </Router> */