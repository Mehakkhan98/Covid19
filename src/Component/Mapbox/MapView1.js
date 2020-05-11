import React from 'react';
import './Mapbox.css';
import Animation from '../Mapbox/Animation';
import LoadingGif from '../Loader/Loader';
function App(props) {
  
  return (
    <div className="maindiv">
    <div className="worldRecord">World Record</div>
   <div>
   <div className="WorldInfoHeading">Total Confirmed Case</div>
  <div style={{color:'#FFFF66',fontSize:22}}>{props.Loading===true?<LoadingGif/>:<Animation data={props.confirmed}/>}</div>
   </div>

   <div>
   <div className="WorldInfoHeading">Total Recovered Case</div>
  <div style={{color:'#32CD32',fontSize:22}}>{props.Loading===true?<LoadingGif/>:<Animation data={props.recovered}/>}</div>
   </div>
  
   <div>
   <div className="WorldInfoHeading">Total Death Case</div>
  <div style={{color:'#FF6347',fontSize:22}}>{props.Loading===true?<LoadingGif/>:<Animation data={props.death}/>}</div>
   </div>
           
      </div>
  );
}

export default App;
