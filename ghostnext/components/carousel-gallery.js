
import p1 from '../images/1.jpg';
import p2 from '../images/2.jpg';
import p3 from '../images/3.jpg';
import p4 from '../images/4.jpg';
import p5 from '../images/5.jpg';
import p6 from '../images/6.jpg';
import p7 from '../images/7.jpg';


import Head from 'next/head';

function CarouselGallery({ Component, pageProps }) {
    return ( 
    
    <body>
        <Head>
        
        <script dangerouslySetInnerHTML={{ __html: 
        `
        var carouselSlide = document.querySelector('.carousel-slide');
        var carouselImages = document.querySelectorAll('.carousel-slide img');

        var prevBtn = document.querySelector('#prevBtn');
        var nextBtn = document.querySelector('#nextBtn');

        var counter = 1;
        var size = carouselImages[0].naturalWidth;

        console.log(carouselImages);

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


        nextBtn.addEventListener('click', ()=>{
            if(counter >= carouselImages.length -1) return;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        });

        prevBtn.addEventListener('click', ()=>{
            if(counter <= 0) return;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        });

        carouselSlide.addEventListener('transitionend', () => {

            if( carouselImages[counter].id === 'lastClone'){
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }

            if(carouselImages[counter].id === 'firstClone'){

                carouselSlide.style.transition = "none";
                counter = carouselImages.length - counter ;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });

        ` }} />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>

        {/* ostatni obrazek musi być taki sam jak pierwszy */}
        <div class = "outer-container">
            <div class = "carousel-container">
                <svg id="prevBtn" width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg id="nextBtn" width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
                <div class = "carousel-slide">
                <img src={p7} alt="" id="lastClone"/>
                <img src={p1} alt="" id=""/>
                <img src={p2} alt="" id=""/>
                <img src={p3} alt="" id=""/>
                <img src={p4} alt="" id=""/>
                <img src={p5} alt="" id=""/>
                <img src={p6} alt="" id=""/>
                <img src={p7} alt="" id=""/>
                <img src={p1} alt="" id="firstClone"/>
                </div>  
            </div> 
        </div>


        <style >{`

        .outer-container{

            padding: 80px 230px 0 230px ;

        }

        .carousel-container{

            width: 100%;
            height: 400px;
            margin: auto;
            border: 5px solid black;
            overflow:hidden;
            position: relative;
        }

        .carousel-slide{
            display:flex;
            
            width: 100%;
            height: 100%;

        }

        #prevBtn{

            position: absolute;
            top: 45%;
            z-index: 2;
            left: 3%;
            opacity: 0.6;
            color: white;
            curosr: pointer;
        }

        #nextBtn{

            position: absolute;
            top: 45%;
            z-index: 2;
            right: 3%;
            opacity: 0.6;
            color: white;
            curosr: pointer;
        }

        
        @media screen and (max-width: 1200px) {
            .carousel-container{

                height: 300px;
            }

            .outer-container{

                padding: 60px 150px 0 150px ;
    
            }
        }

        @media screen and (max-width: 850px) {
            .carousel-container{

                height: 250px;
            }

            .outer-container{

                padding: 50px 100px 0 100px ;
    
            }
        }

        
        `}</style>


    </body>
    )
  }
  

  export default CarouselGallery;


