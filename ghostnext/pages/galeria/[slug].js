import { getSinglePost } from '../api/posts';

//TU ZNAJDUJE SIĘ POJEDYNCZY POST GALERII

const PostPage = (props) => {
    // Render post title and content in the page from props
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

      <style>{`


        figure{

          float: left;
          width: 20%;
          padding: 5px;
        }

        img{

          width: 100%;
          height: 100%;

          max-height: 15vw;
        }

      `}</style>

      </body>

      )
  }


  PostPage.getInitialProps = async (params) => {
    const post = await getSinglePost(params.query.slug);
    return { post: post }
  };
  


export default PostPage





