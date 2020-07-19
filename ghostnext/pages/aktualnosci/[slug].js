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


            <div class="articleText">
                <h1 class="introduction">{props.post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
            </div>

      <style jsx>{`

      @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,700);
      *{
        font-family: 'Open Sans';
        line-height: 170%;
      }
      body, p, h1, h2{
        margin: 0;
        padding: 0;
      }
      
      .articleText{

        padding: 50px;
        color: coral;
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





