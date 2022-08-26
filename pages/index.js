import Bio from './Bio';
import React, { Component } from 'react';
import Head from 'next/head';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Sadie Allen's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bio/>
    </div>
  )
}