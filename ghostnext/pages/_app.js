import Link from 'next/link';


function MyApp({ Component, pageProps }) {
    return ( 
    
    <body>
  
    <section>
    <div class = "container">
      <header>
          <div class = "navbar">
            <   >
              <a class = "navbar-a">Politechnika Lubelska</a>
            </>
  
            <nav>
              <ul class = "navbar-ul">
                <li class = "navbar-li"><Link href={'/aktualnosci'}><a class = "navbar-a">Aktualnosci
                  </a></Link></li>
  
                <li class = "navbar-li"><Link href={`/gallery`}  ><a class = "navbar-a">Galeria
                  </a></Link></li>
  
                <li class = "navbar-li"><  ><a class = "navbar-a">Informacje
                  </a></></li>
                  
              </ul>
            </nav>
          </div>
        </header>
      </div>
      </section>
  
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

`}</style>

  
    </body>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp



