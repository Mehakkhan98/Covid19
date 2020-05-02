import React,{ useEffect,useState } from 'react';
import Modal from 'react-modal';
import  ProgressBar  from "../ProgressBar/ProgressBar";
import axios from 'axios';
const customStyles = {
  content : {
    top                   : '50%',
    height:'32%',
    width:'32%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderWidth:2,
    borderColor:'red',
    backgroundColor:'black',
    borderRadius:10
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


 
export default function App(props){
// const tokan='pk.6196fb0f738e4c61d1460a508e394707',
 //const  key='1efe20beeb1c03';
 const[city,setcity]=useState('')
 
 const GeoCoding=()=>{
    axios.get(`https://us1.locationiq.com/v1/reverse.php?key=1efe20beeb1c03&lat=${props.d.latitude}&lon=${props.d.longitude}&format=json`)
    //.then(response => response.json())
      .then(response => {
        setcity(response.data.display_name)
          console.log("Response that i need is",response.data)
          console.log("Response that i need is",response.data.display_name)
      })
     
    }
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    console.log(props.d.longitude)
 console.log(props.d.latitude)
 
    setIsOpen(true);
    GeoCoding();
  }
 
  function afterOpenModal() {
   
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'red';
   
    
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
    
      <div>
        <button style={{height: '22px',
  width: '22px',
  backgroundColor: 'red',
  color:'red',
  borderRadius: '50%',
  borderColor:'red',
  display: 'inline-block'}} onClick={openModal}></button>
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{props.country}</h2>
          <div style={{position:'absolute',top:70,left:10,color:'white'}}>
            <div style={{fontSize:22}}>Confirmed:</div>
            <div>{props.confirmed}</div>
          </div>
          <div style={{position:'absolute',top:120,left:10,color:'white',fontSize:11,width:150}}>
            <div>{city}</div>
          </div>
          <div style={{color:'gray',position:'absolute',top:170,left:15}}>
            <div style={{color:'white'}}>Updated at</div>
            <div>Date: {(props.data).slice(0, 10)}</div>
            <div>Time: {(props.data).slice(11, 16)}</div></div> 
           
   <div style={{right:10,height:140,width:200,position:'absolute',borderRadius:5}}>
   <div style={{marginBottom:8}}>
   <div style={{color:'white'}}>Active:</div>
  <div style={{position:'absolute',right:3,color:'white',top:0}}>{(props.confirmed-(props.latestRecovered+props.latestDeaths))}</div>
    <ProgressBar confirmed={props.confirmed} confirmedpercentage={((props.confirmed-(props.latestRecovered+props.latestDeaths))*100/props.confirmed).toFixed(2)} />
   </div>
  <div style={{marginBottom:8}}>  
    <div style={{color:'white'}}>Recovered:</div>
     <div style={{position:'absolute',right:3,color:'white',top:35}}> {props.latestRecovered}</div>
     <ProgressBar recovered={props.latestRecovered} Recoveredpercentage={(props.latestRecovered*100/props.confirmed).toFixed(2)} />
     </div>
    <div>
    <div style={{color:'white'}}>Death:</div> 
    <div style={{position:'absolute',right:3,color:'white',top:70}}> {props.latestDeaths}</div>
    <ProgressBar death={props.latestDeaths} Deathpercentage={(props.latestDeaths*100/props.confirmed).toFixed(2)}/>
    </div>
  
    
    </div>
 
          <form>
            
          <button onClick={closeModal}style={{marginTop:20,top:3,right:10,borderRadius:5,position:'absolute'}}><i  className="fa fa-close"></i></button>
           
          </form>
        </Modal>
      </div>
    );
}

