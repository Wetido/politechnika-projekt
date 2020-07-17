
import React from "react";
import dynamic from 'next/dynamic';
import Carousel from '../components/new-gallery';
import Navbar from'../components/Navbar';

const NoSSRGallery = dynamic(() => 
import("../components/carousel-gallery"), {
  ssr: false,});


const NoSSRToolbar = dynamic( () => 
import('../components/toolbar'), { ssr: false } )


const IndexPage = (props) => (

  
  <body>

    <Navbar/>
    <Carousel/>

  </body>
  
);


export default IndexPage



