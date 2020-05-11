import React from 'react';
import Slider from '../Carosal/ImageSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '../Card/Card';
import axios from 'axios';
import Footer from '../Footer/Footer';
export default class ReactGifLoader extends React.Component {
    constructor(props) {
        super(props);
         this.state={
         
           totalConfirmedLatest: 0,
        totalDeathsLatest: 0,
        totalRecoveredLatest: 0
         }
        }
  componentWillMount(){
   
    
          
          axios
            .get("https://api.thevirustracker.com/free-api?global=stats")
            .then((res) => {
              this.setState({
                totalConfirmedLatest: res.data.results[0].total_cases,
                totalDeathsLatest: res.data.results[0].total_deaths,
                totalRecoveredLatest: res.data.results[0].total_recovered,
                Loader:false,
              });
              
            });
       
       
      
      }
    
    render() {
        return (

          <div styles={{ height: '500px', overflowY: 'scroll' }}>
           <Slider/>
          
           <div style={{flexDirection:'row',display:'flex',justifyContent:'center',marginBottom:40}}>
               <div style={{marginRight:18}}>
           <Card Case="Confirmed Cases" data={this.state.totalConfirmedLatest}/>
               </div>
               <div style={{marginRight:18,marginLeft:18}}>
               <Card Case="Recovered Cases" data={this.state.totalRecoveredLatest}/>
               </div>
           <div style={{marginRight:18,marginLeft:18}}>
           <Card Case="Expire/Death Cases" data={this.state.totalDeathsLatest}/>
           </div>
           </div>
          <div>
          <Footer/>
          </div>
           </div>

            
            
        );
    }
}