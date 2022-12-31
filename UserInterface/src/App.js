import Image from './assets/byd2024.jpg';
import React, { useState}  from 'react';

function App() {


  const [durum, setDurum] = useState("Congrulations! You join the presale!");
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [payment, setPayment] = useState();
  const [pID, setPID] = useState(1);
  const [join, setJoin] = useState(0);


  
var url =  "https://af7ffd7bca92483483c405ed28c00d15.apic.ap-southeast-3.huaweicloudapis.com/tofunc?ID="+id+"&Name="+name+"&Payment="+payment+"&ProductID="+pID;



const handleSubmit = (e) => {
  e.preventDefault();
 
  fetch( url,
      {
        method: "POST",
      }
    ).then(() => {
        setDurum("Congrulations! You join the presale!");
        setJoin(1);
      }).catch((err) => {
        setDurum("Tekrar Deneyin!");
        console.log(err);
      });
     
}



  return (
    <div className="container mt-5 py-4 px-xl-5">
      <form  onSubmit={handleSubmit}>
  
    
      <div className="row mb-6" >
         
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={Image}
              />
            </div>
          </div>

          {}
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">BYD Han EV 2024</h2>
            <h4 className="text-muted mb-4">1,850,000 TRY</h4>

      
            {join === 0 ? (
            <dl className="row ">

   

              <dt className="col-sm-4">ID Number</dt>
              <dd className="col-sm-8 mb-3"> <input type="text"  onChange={e => setId(e.target.value)} /></dd>



              <dt className="col-sm-4">Name Surname</dt>
              <dd className="col-sm-8 mb-3"> <input type="text"  onChange={e => setName(e.target.value)} /></dd>

              <dt className="col-sm-4">Payment</dt>  
              <dd className="col-sm-8 mb-3"> <input type="text"  onChange={e => setPayment(e.target.value)} /></dd>


         
        <div className="col"> 
              <button type="submit" onSubmit={handleSubmit} className="btn btn-dark py-2 ">Join Presale Now</button>
            </div>
             
            </dl>

):(

  <dl className="row ">
 <br></br>

 <div className="btn">
   <h5>  
    {durum}  </h5>
    </div>
  
    </dl>
)}



</div>       
        </div><hr />
        <div className="row col-sm-4">
         
        <dt className="col-sm-4">Color</dt>
              <dd className="col-sm-8 mb-3">White</dd>
              
              <dt className="col-sm-4">Range</dt>
              <dd className="col-sm-8 mb-3">850 Km</dd>
        </div>
        <div className="row col-sm-4">
          
          
            <dt className="col-sm-4">Body</dt>
              <dd className="col-sm-8 mb-3">Luxury Sedan</dd>
                  
      
        <dt className="col-sm-4">Power</dt>
              <dd className="col-sm-8 mb-3">125 PS</dd>
                  
            
               
              
         </div>
        <div className="row col-sm-4">
        <dt className="col-sm-4">Count</dt>
               <dd className="col-sm-8 mb-3">200000</dd>
        
     
                       <dt className="col-sm-4">Torque</dt>
              <dd className="col-sm-8 mb-3">280 Nm</dd>
        </div>  <hr />
            <h4 className="mb-0">Description</h4>
          
            <p className="lead flex-shrink-0">
              <small>
              BYD itself develops its competitive advantage on a low-cost R&D strategy. 
              Ten percent of the 130,000 employees are engineers who graduated from the top Chinese universities. 
              Based on this imitation strategy combined with a low R&D cost strategy, the innovation cycle in the car business for BYD is three years. The current model range of automobiles includes battery electric vehicles (BEVs) and plug-in hybrid electric</small>
            </p>
    
      </div>
   

      </form>
    </div>
  );
}

export default App;
