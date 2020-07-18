import { getPosts, getSinglePost, getAuthor } from './api/posts';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import NavbarThird from '../components/Navbar-third';


const NoSSRToolbar = dynamic(() => 
import("../components/toolbar"), {
  ssr: false,
});



const NewsPage = (props) => (
  <body>

<NavbarThird/>

    <section>
    <ul class = "post-ul">
      <h2>Najnowsze posty</h2>
        {props.posts.map(post => (

         <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
          
            <li key={post.id} class="post-li">
                <a class = "post-a"> <img class="image-shortcut" alt="" src={post.feature_image}></img></a>
              <div>  
                  <a class = "post-a">{post.title}</a>
                <p>{post.excerpt}</p>  
              </div>

            </li>

          </Link>
          
        ))}
      </ul>
    </section>

    <style >{` 

    ///////////////////////////////

    .post-ul{

      list-style-type: none;
      padding: 2em 4.5em 4.5em 4.5em;
      display: wrap;
    }

    .post-li{

      background: white;
      border-radius: 1em;
      padding: 3em; 
      margin-bottom: 3em;
      box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.34);
    }

    .post-li:hover{

      box-shadow: 30px 40px 40px 0px rgba(0,0,0,0.34);
    }
    .image-shortcut
    {
      border-radius: 5em;
    }
    img {

      width: 100%;
      
    }

    .post-a{

      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -0.1em 0 0.2em;
      text-align: center; 
    }

    @media only screen and (min-width: 768px){

      .post-li{
        display:grid;
        grid-template-columns: 180px auto;
        grid-column-gap: 1em;
      }
    }

    `}</style>

  </body>
  
);

NewsPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default NewsPage;



