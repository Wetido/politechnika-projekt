import { getPosts, getSinglePost, getAuthor } from './api/posts';

import Link from 'next/link';



const IndexPage = (props) => (
  <body>

  <div class = "view"> 
  <div class = "container">
    <header>
        <div class = "navbar">
          <   >
            <a class = "navbar-a">Politechnika Lubelska</a>
          </>

          <nav>
            <ul class = "navbar-ul">
              <li class = "navbar-li"><  ><a class = "navbar-a">Aktualnosci
                </a></></li>

              <li class = "navbar-li"><  ><a class = "navbar-a">Galeria
                </a></></li>

              <li class = "navbar-li"><  ><a class = "navbar-a">Informacje
                </a></></li>

            </ul>
          </nav>
        </div>
      </header>
    </div>



    <ul class = "post-ul">
      <h2>Najnowsze posty</h2>
        {props.posts.map(post => (

         <Link href={`/[slug]`} as={`/${post.slug}`}>
          
            <li key={post.id} class="post-li">
                <a class = "post-a"> <img alt="" src={post.feature_image}></img></a>
              <div>  
                  <a class = "post-a">{post.title}</a>
                <p>{post.excerpt}</p>  
              </div>

            </li>

          </Link>
          
        ))}
      </ul>
    </div>

    <style >{`

    body {
      font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
        'Arial', sans-serif;
      margin: 0 auto;
    }



    header {

      background: pink;
      padding: 1em 1em 1em 1em;
      text-align: center;
      
    }

    .navbar-a {

      text-decoration: none
      color: white;
      padding: 0.5em;
    }

    .navbar {

      display: flex;
      justify-content: space-between;
      font-weight: bold;
      color: white;
      text-decoration: none
    }

    nav{

      display: flex;
    }

    .navbar-ul {

      list-style-type: none;
      padding: 0;
      display: flex;
    }

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

    img {

      width: 100%;
      border-radius: 5em;
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

IndexPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default IndexPage



