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
    <ul class = "page">
      <h2>Najnowsze posty</h2>
        {props.posts.map(post => (

        <div class="archive">
          <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
            
            <li key={post.id} class="article">
                <a class = "post-a"> <img class="image-shortcut" alt="" src={post.feature_image}></img></a>
              <div>  
                  <a class = "post-a">{post.title}</a>
                <p>{post.excerpt}</p>  
              </div>

            </li>

          </Link>
        </div>

          
        ))}
      </ul>
    </section>

    <style >{` 

    ///////////////////////////////

    body {
      background: #001628;
      color: #777;
      padding: 4em;
      font-family: sans-serif;
      line-height: 1.15;
    }
    
    hr { /*dummy content*/
      height: 6px;
      border: none;
      background: rgba(0, 0, 0, 0.1);
    } 
    
    hr:last-child {  /*dummy content*/
      margin-right: 60%;
    }
    
    hr.image { /*dummy content*/
      padding-bottom: 50%;
    } 
    
    .page {
      padding: 2em;
      background: #cecece;
      max-width: 1100px;

      list-style: none;
    }
    
    .archive {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      grid-gap: 1em;
    }
    
    .article {
      padding: 1em;
      background: #fff;
      box-shadow:
        0 5px 10px rgba(0, 0, 0, 0.1),
        0 20px 20px rgba(0, 0, 0, 0.05);
    }

    img{

      width: 100%;
      heigth: 100%;
    }

    `}</style>

  </body>
  
);

NewsPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default NewsPage;



