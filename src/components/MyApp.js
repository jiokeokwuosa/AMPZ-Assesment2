import React from 'react';
import Item from './includes/item';

function MyApp() {
  return (
    <>
      <div id="main" className="container-fluid">
        <div className="row row1">
           <div className="col-md-4">
              <img src={require('../assets/img/5.png')} alt='Icon 1'/>
           </div>
           <div className="col-md-4 myInput">                        
              <input placeholder="Search in New Delhi"/>    <img src={require('../assets/img/6.png')} alt='craigslist'/>          
           </div>
           <div className="col-md-4 icons">
              <img src={require('../assets/img/2.png')} alt='Icon 1'/>  <img src={require('../assets/img/3.png')} alt='Icon 2'/> <img src={require('../assets/img/4.png')} alt='Icon 3'/>
           </div> 
           <img src={require('../assets/img/7.png')} alt='curve' className="firstCurve"/>            
        </div>
        <div className="row row2">
          <div className="col-md-6">
           <input type="checkbox" checked/> CG Verified &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Vintage Car:</span> 326 Results
          </div>         
          <div className="col-md-6">
            New Dehli <img src={require('../assets/img/8.png')} alt='location'/> <img src={require('../assets/img/9.png')} alt='mobile menu'/>  <img src={require('../assets/img/10.png')} alt='bar2'/>   <select><option>Oldest</option><option>older</option></select> 
          </div>
        </div>
        <div className="row row3">
          <div className="col-md-2"> 
            <div className="row">
              <div className="col-md-12">
                <img src={require('../assets/img/13.png')} alt='dropdown' className="dropdown"/>Cars & Trucks
              </div>
            </div>  
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li><img src={require('../assets/img/14.png')} alt='dropdown' className="dropdown1"/>All</li>
                  <li><img src={require('../assets/img/15.png')} alt='dropdown' className="dropdown1"/>Owner</li>
                  <li><img src={require('../assets/img/14.png')} alt='dropdown' className="dropdown1"/>Dealer</li>
                </ul>
              </div>
            </div> 
            <div className="row">
              <div className="col-md-12">
                <img src={require('../assets/img/13.png')} alt='dropdown' className="dropdown"/>Price<br/><br/><small>Up to #500,000 less</small>
              </div>
            </div> 
            <div className="row push2">
              <div className="col-md-12">
                <img src={require('../assets/img/16.png')} alt='dropdown' className="dropdown"/>Model Year
              </div>
            </div>  
            <div className="row push">
              <div className="col-md-12">
                <img src={require('../assets/img/16.png')} alt='dropdown' className="dropdown"/>Condition
              </div>
            </div> 
            <div className="row">
              <div className="col-md-12">
                <img src={require('../assets/img/13.png')} alt='dropdown' className="dropdown"/>Paint Color
              </div>
            </div>   
            <div className="row circle">
              <div className="col-md-12">
                <span className="greenCircle"></span> <span className="yellowCircle"></span><span className="greyCircle"></span> <span className="whiteCircle"></span><br/><span className="darkredCircle"></span><span className="redCircle"></span><span className="blueCircle"></span>
              </div>
            </div>  
            <div className="row">
              <div className="col-md-12">
                <p className="button">Reset Filter</p>
              </div>
            </div>    
           
          </div>
              
          <div className="col-md-10">
            <div className="row">
              <Item img={require('../assets/img/a.jpg')} heart={require('../assets/img/11.png')} duration='02 days ago' title='Lambrogini' price='1,000,000' durationClass='red'/>
              <Item img={require('../assets/img/b.jpg')} heart={require('../assets/img/12.png')} duration='08 days ago' title='Toyota' price='6,000,000' durationClass='red'/>
              <Item img={require('../assets/img/c.jpg')} heart={require('../assets/img/12.png')} duration='21 days ago' title='Honda' price='9,000,000' durationClass='red'/>
            </div>
            <div className="row pushDown">
              <Item img={require('../assets/img/d.jpg')} heart={require('../assets/img/12.png')} duration='06 days ago' title='Santana' price='4,000,000' durationClass='grey'/>
              <Item img={require('../assets/img/e.jpg')} heart={require('../assets/img/11.png')} duration='03 days ago' title='Volkswagen' price='6,000,000' durationClass='grey'/>
              <Item img={require('../assets/img/f.jpg')} heart={require('../assets/img/12.png')} duration='14 days ago' title='Honda' price='6,000,000' durationClass='grey'/>
            </div>
            <div className="row pushDown">
              <Item img={require('../assets/img/c.jpg')} heart={require('../assets/img/12.png')} duration='11 days ago' title='Beattle' price='1,400,000' durationClass='grey'/>
              <Item img={require('../assets/img/a.jpg')} heart={require('../assets/img/12.png')} duration='02 days ago' title='Honda' price='5,500,000' durationClass='blue'/>
              <Item img={require('../assets/img/b.jpg')} heart={require('../assets/img/12.png')} duration='31 days ago' title='Toyota' price='8,400,000' durationClass='blue'/>
            </div>
          </div>
          <img src={require('../assets/img/17.png')} alt='floating image' className="floatingImg1" />
          <p className="copyright">&copy; craigslist&nbsp;&nbsp;&nbsp;&nbsp; Terms &nbsp;&nbsp;&nbsp;&nbsp; Privacy</p>
        </div>      
      </div> 
      <img src={require('../assets/img/18.png')} alt='floating image' className="floatingImg2" />
      <img src={require('../assets/img/19.png')} alt='floating image' className="floatingImg3" />
    </>
  );
}

export default MyApp;
