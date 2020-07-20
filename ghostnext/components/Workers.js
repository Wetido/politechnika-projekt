import Link from 'next/link';
import Head from 'next/head';
import worker1 from '../images/banach_h.jpg';
import worker2 from '../images/jarzyna_w.jpg';
import worker3 from '../images/kolano_j.jpg';
import worker4 from '../images/machlarz_r.jpg';

const Workers = () => (
<div>
    <h2 class="worker-branch">Nasi Pracownicy</h2>
    <br/>
    <div class="container-worker">
        
        <div class="worker worker-1">
        <img class="worker-images" src={worker1} alt="First slide"/>
        </div>
        
        <div class="worker worker-2">
        <img class="worker-images" src={worker2} alt="First slide"/>
        </div>
        
        <div class="worker worker-3">
        <img class="worker-images" src={worker3} alt="First slide"/>
        </div>
        
        <div class="worker worker-4">
        <img class="worker-images" src={worker4} alt="First slide"/>
        </div>
    </div>
    <Link href={'/aktualnosci'}><a class="view-more-worker">zobacz więcej</a></Link>
    
   <style >{`
   .worker-branch{
    padding-left: 60px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
      
   }
   h2{
       font:30px;
   }
   .container-worker{
    display:flex;
    padding:5px;
    justify-content:center;
    }
    

    .worker{
 
        padding:0px 100px 0px 100px;
    }
    
    .worker-1{
        
     
            
              
    }
            
    .worker-2{
        
    }
            
    .worker-3{
             
        }
        .worker-4{

        }
    .view-more-worker{
        position:absolute;
        right:0;
        padding-right:10%;
        font-size:25px;
        color:black;
    }
    .view-more:hover{
        color:#CCCCCC;
        text-decoration:none;
    }
    .worker-images{
        border-radius:30%;
        border:2px solid black;
    }
    @media screen and (max-width: 1200px) {
        .worker-images{
          width:100%;
          height:100%;
        }
      }
  
      @media screen and (max-width: 768px) {
        .worker-images{
          width:100%;
          height:100%;
        }
      }

    `}</style> 

</div> 
);



export default Workers;