
import React from "react";
import dynamic from 'next/dynamic';
import Carousel from '../components/new-gallery';

import { getIndexPagePosts } from './api/posts';
import Head from 'next/head';
import NavbarThird from '../components/Navbar-third';
import Workers from '../components/Workers';

import Link from 'next/link';




const NoSSRToolbar = dynamic( () => 
import('../components/toolbar'), { ssr: false } )


const IndexPage = (props) => (
 <body>
<Head>
<link rel="shortcut icon" href="ghostnext\public\favicon.ico" />
</Head>


  <div>

    <NavbarThird/>
    <Carousel/>
    
    <section>
    <h2 class="news-branch">Aktualności</h2>
    <br/>
    <ul class = "box">

        {props.posts.map(post => (
            

            <li key={post.id} class="post-li">

                <h1 class = "post-a">{post.title}</h1>
                <p>{post.excerpt}</p>  
                <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
                <button class="view-more">Zobacz więcej</button> 
                </Link>
            </li>

          
        ))}
      </ul>
    </section>
    <Workers/>



  </div>

  <style >{`

  
  body {
    background: #f5f0f0;

  }


   .news-branch{
    padding-left: 60px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
   }



   .box{
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0 auto;
    }
    
    .post-li{
      padding: 25px 40px 25px 40px;
      width: 31%;
      background-color: #cecece;
      border-radius: 25px;
      margin: 10px 10px 10px 10px;
      align-items: center;
      justify-content: space-around;
    }

    
    .view-more{

      border: 1px solid #3498db;
      background: none;
      padding: 10px 20px;
      font-size: 20px;
      font family: "montserrat";
      cusros: pointer;
      margin: 10px;
      color: #3498db;
      transition: 0.8s;
      position: relative:
      overflow:hidden;


    }

    .view-more:hover {
        color: coral;
    }

    @media screen and (max-width: 1200px) {
      .post-li{
        width: 45%;
      }
    }

    @media screen and (max-width: 768px) {
      .post-li{
        width: 90%;
      }
    }

    `}</style> 

  </body>
);


IndexPage.getInitialProps = async () => {
  const posts = await getIndexPagePosts();
  return { posts: posts }
}


export default IndexPage



