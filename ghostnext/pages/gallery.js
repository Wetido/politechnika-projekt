import { getPages } from './api/posts';


const GalleryPage = (props) => {
    return (

        <body>
            <div>
              <article class = "gallery">
                 <div dangerouslySetInnerHTML={{ __html: props.pages.html }} />
                </article>
            </div>


        
         <style >{`

        article{

            display: flex;

        }

        figure{

            float: left;
            width: 20%;
            padding: 5px;
        }



        `}</style>
        </body>

    )
  }


  
  GalleryPage.getInitialProps = async () => {
    const pages = await getPages('gallery');
    return { pages: pages }
  };
  
  export default GalleryPage;