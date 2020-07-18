
import React from "react";
import dynamic from 'next/dynamic';
import Carousel from '../components/new-gallery';
import News from '../components/news';
import Head from 'next/head';
import NavbarThird from '../components/Navbar-third';




const NoSSRToolbar = dynamic( () => 
import('../components/toolbar'), { ssr: false } )


const IndexPage = (props) => (
 <div>
<Head>
<link rel="shortcut icon" href="ghostnext\public\favicon.ico" />
</Head>
  <body>

    <NavbarThird/>
    <Carousel/>
    <News/>

  </body>
  </div>
);


export default IndexPage



