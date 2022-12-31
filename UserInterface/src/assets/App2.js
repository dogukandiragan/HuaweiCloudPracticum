import './App.css';
import React, { useState, useEffect} from "react";
import BuyerList from './BuyerList';
import axios from 'axios';

function App2() {
 
  const [durum, setDurum] = useState("Ready");
  const [selec, setSelec] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDurum("Submitted!");

    axios.get( "http://8d089139c64b4bf9be0b78e9548ec590.apic.ap-southeast-3.huaweicloudapis.com/getall")
    .then( res => {
        setSelec(res.data);
        setDurum("done");
      }
      
        ).catch((err) => {
          setDurum("Booom");
          console.log(err);
        });
    
 
  
}

  



  //  <input type="file" onChange={selectFile} />
  return (
    <div className="App">
      <header className="App-header">
      <form  onSubmit={handleSubmit}>
    {durum}   <hr/>
      <button type="submit" onSubmit={handleSubmit}>Select</button>
    <hr/>
     
   {selec}
     
    </form>

      </header>
    </div>
  );
}

export default App2;
