import Link from 'next/link';
import Head from 'next/head';
//Link odpowiada za dynamiczne przekierowywanie z 
//folderu pages, na zasadzie np 
//pages/post/index.js


const Navbar = () => (
    <div>
    <Head>
    <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
      <Link href={'/'}><a >KNME</a></Link>
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href={'/o-katedrze'}><a className="nav-link">O katedrze</a></Link>
          </li>
          <li className="nav-item">
            <Link href={'/aktualnosci'}><a className="nav-link">Aktualności</a></Link>
          </li>
          <li className="nav-item">
            <Link href={'/galeria'}><a className="nav-link">Galeria</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


   <style jsx>{`
        .navbar-brand{
          text-decoration: none;
          color: black;
        }

    `}</style> 


  </div>
);


export default Navbar;