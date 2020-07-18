import { getPages, getPostsByTag } from './api/posts';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NavbarThird from '../components/Navbar-third';

//STRONA GŁÓWNA GALERII

const NoSSRToolbar = dynamic(() => 
import("../components/toolbar"), {
  ssr: false,
});

const GalleryPage = (props) => {
    return (

        <body>
            
            <NavbarThird/>


            <section>
            <div>
                <ul class = "post-ul">
                        {props.gallerys.map(gallery => (

                        <Link href={`galeria/[slug]`} as={`galeria/${gallery.slug}`}>
            
                            <li key={gallery.id} class="post-li">

                            <div>  
                                <a class = "post-a">{gallery.title}</a>
                            </div>

                            </li>

                        </Link>
            
                        ))}
                 </ul>
            </div>
            </section>

         <style >{`

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

            /////////////////////////

        `}</style>
        </body>

    )
  }


  
  GalleryPage.getInitialProps = async () => {
    const gallerys = await getPostsByTag('galeria');
    return { gallerys: gallerys }
  };
  
  export default GalleryPage;