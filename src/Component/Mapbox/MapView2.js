import React from 'react';
import './Mapbox.css';

function App(props) {
  return (
    <div className="maindiv">
     
    <div className="worldRecord">World Record</div>
   <div>
   <div className="WorldInfoHeading">Total Confirmed Case</div>
   <div style={{color:'yellow',fontSize:22}}>{props.confirmed}</div>
   </div>

   <div>
   <div className="WorldInfoHeading">Total Recovered Case</div>
   <div style={{color:'green',fontSize:22}}>{props.recovered}</div>
   </div>
  
   <div>
   <div className="WorldInfoHeading">Total Death Case</div>
   <div style={{color:'#FF6347',fontSize:22}}>{props.death}</div>
   </div>
       
      
      </div>
   
  );
}

export default App;
