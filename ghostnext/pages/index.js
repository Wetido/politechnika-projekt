
import React from "react";
import dynamic from 'next/dynamic';


const NoSSRGallery = dynamic(() => 
import("../components/carousel-gallery"), {
  ssr: false,});


const NoSSRToolbar = dynamic( () => 
import('../components/toolbar'), { ssr: false } )


const IndexPage = (props) => (

  
  <body>

    <NoSSRToolbar/>
    <NoSSRGallery/>

  </body>
  
);


export default IndexPage



