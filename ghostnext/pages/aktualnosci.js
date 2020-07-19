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

  
              
        
        
    

    `}</style>

  </body>
  
);

NewsPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default NewsPage;



