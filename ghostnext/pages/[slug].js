import { getSinglePost } from './api/posts';



const PostPage = (props) => {
    // Render post title and content in the page from props
    return (
      <body>
        <main>
          <div>
            <h1>{props.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
          </div>
        </main>


      <style jsx>{`

        
        body {
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
            'Arial', sans-serif;
          padding: 20px 20px 60px;
          max-width: 680px;
          margin: 0 auto;
        }

        .kg-image {

          visibility: hidden;
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





