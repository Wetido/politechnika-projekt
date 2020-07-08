import { getSinglePost } from './api/posts';


//GENEROWANIE JAKEIKOLWIEK POSTU GDY MAMY DOSTEP DO JEGO ENDPOINTU
//NP. USER MOZE WPISAC domena/zdjecia2020 i zostanie mu wyswietlona galeria zdj ze stylami 
//które są dostępne dla zwykłego postu. Ponieważ style galerii dostępne są pod adresem
//domena/galeria/2020 i tam znajduje się stylizowanie galerii. Trzeba coś z tym zrobić poprawiajac te endpointy.
//Tak samo możeny przejść pod adres domena/galeria/welcome i uzyskamy zwykł post w stylu galerii.

const PostPage = (props) => {
    return (
      <body>
        <div class = "container">
          <main>
              <h1>{props.post.title}</h1>
              <div class = "content">
                <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
              </div>
          </main>
        </div>



      <style jsx>{`

        heder { 

          height: 15em;

        }

        h1{

          color: white;
          maring-bottom: 1em
        }

        .content {

          background: white;
          border-radius: 1em;
          padding: 1em;

        }


        .content img{
          width: 1%;
        }

        

        

      `}</style>

      </body>

      )
  }

  // Pass the page slug over to the "getSinglePost" function
  // In turn passing it to the posts.read() to query the Ghost Content API
  PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };
  




export default PostPage





