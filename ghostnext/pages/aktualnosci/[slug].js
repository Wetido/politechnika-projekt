import { getSinglePost } from '../api/posts';
import Head from 'next/head';
import NavbarThird from '../../components/Navbar-third';

//GENEROWANIE JAKEIKOLWIEK POSTU GDY MAMY DOSTEP DO JEGO ENDPOINTU
//NP. USER MOZE WPISAC domena/zdjecia2020 i zostanie mu wyswietlona galeria zdj ze stylami 
//które są dostępne dla zwykłego postu. Ponieważ style galerii dostępne są pod adresem
//domena/galeria/2020 i tam znajduje się stylizowanie galerii. Trzeba coś z tym zrobić poprawiajac te endpointy.
//Tak samo możeny przejść pod adres domena/galeria/welcome i uzyskamy zwykł post w stylu galerii.

const PostPage = (props) => {
    return (
      <div>
          <NavbarThird></NavbarThird>


          <main class="single-post-box">
          <h1 class = "title">{props.post.title}</h1>
          <div class = "grid-container">
                  <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
          </div>
        </main>

      <style>{`

      .single-post-box{

        padding: 30px;
      }

      .grid-container{

        padding: 30px;
      }

      .title {
        padding: 30px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: bold;
        color: coral;
      }

      main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: sans-serif;
        overflow:hidden;
      }
      h1 {
        color: coral;
      }

      img {
        width: 100%;
        border-radius: 5px;
      }

      .kg-bookmark-card {

        width: 10%;
        heigth: 10%;
      }


        

      `}</style>

      </div>

      )
  }

  PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };
  




export default PostPage





