

import React from "react";
import Toolbar from '../components/toolbar';
import dynamic from 'next/dynamic';


const NoSSRComponent = dynamic(() => 
import("../components/carousel-gallery"), {
  ssr: false,
});

const IndexPage = (props) => (

  
  <body>

  <Toolbar></Toolbar>

  <NoSSRComponent></NoSSRComponent>



  </body>
  
);


export default IndexPage



