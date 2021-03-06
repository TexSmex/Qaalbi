import React from "react";
import './WelcomePage.css';
import Instafeed from 'react-instafeed';
 
export const Header = () => ( 
  <div className="text-center banner">
  <div className="row">
    <div className=" container nameplate">

      <img className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-4" src={require("../../images/logo.jpg")} alt="logo" />
        <p className="subtext  col-xs-12 col-sm-12 col-md-4 col-lg-4 ">Here to serve all your needs</p>
        <a className="btn btn-dark btn-xl text-uppercase mb-5  col-xs-12 col-sm-12 col-md-4 col-lg-4 " id="getStrt" href="#btnjmp">Get Started</a>
    </div>
    </div>
    </div>
 
);

export class Carousel extends React.PureComponent {
  render() {
    return (
 <div id="btnjmp">
<div className="container-fluid mt-3 mb-5 about">
<h2 className="text-center" id="titles">About Us</h2>

<div className="row" >
  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className=" " src={require("../../images/g3.jpg")} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g2.jpg")} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g1.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g4.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g5.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g6.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g7.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g8.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g4.jpg")} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className=" " src={require("../../images/g10.jpg")} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
      <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
     
      <div id="abt" className="" role="alert">
        <p className="text-center">We provide a multitude of services ranging from Day-of to Full Service Event Coordination. Your coordinator will collaborate with you to produce an unforgettable event that will be tailored to you & your vision on your joyous occasion. During a complimentary initial consultation, you will have the opportunity to look through our portfolios, learn more about our services and ask any questions you may have. Once we determine what services are needed through this consultation, a proposal will be created and customized especially for you to best fit your needs. QAALBI IS ALL ABOUT CREATING AN UNFORGETTABLE EXPERIENCE FOR EACH INDIVIDUAL CLIENT. </p>
      </div>
      </div>
    </div>
  </div>
  </div>
    );
  }
}

export const About = () => (
  <div>
    </div>
);

export class InstagramFeed extends React.PureComponent {
  render() {
    const instafeedTarget = 'instafeed'
    return (
      <div className="text-center mt-5 mb-5">
        <h2 id="titles">View Our Instagram Feed</h2>
        <div id={instafeedTarget}>
          <Instafeed
            limit='16'
            ref='instafeed'
            resolution='thumbnail'
            sortBy='most-recent'
            target={instafeedTarget}
            template={ `
            <div className='insta'>
              <a href='{{link}}' target='_blank' className='instafeed__item  '>
              
              <img className='instafeed__item__background pics' src='{{image}}' />  
               
              </a>
            </div>
            `}
            userId='5583030622'
            clientId='5583030622'
            accessToken='5583030622.ba4c844.186ef35d5451485b80e09eff337e69b6'/>
        </div>
      </div>
    )
  }
};

export const Services = () => (

 
    <div className="container" >
      <h2 className="text-center mb-5" id="titles">Services</h2>

      <div className="row">
          <div className="card-body ml-3 mr-3 rounded planning-column">
          <h4 className="mb-0">
          <div className="btn btn-outline-danger btn-lg btn-block text-center text-uppercase"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Day Planning</div>
          </h4>
          <div id="collapseOne" className="panel-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
              <ul className="list-group text-center">
              <img className="card-img-top mx-auto d-block " src={require("../../images/bookjpg.jpg")} alt="image1" />
                <li className="list-group-item">One Face-To-Face</li>
                <li className="list-group-item">Meeting The Month Of</li>
                <li className="list-group-item">Scheduled Phone and Email Consultations</li>
                <li className="list-group-item">Day Of Coordination (up to twelve hours)</li>
                <li className="list-group-item">One Planner and One Assistant</li>
                <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
                <li className="list-group-item">Manage Timeline Created by Client</li>
                <li className="list-group-item">Monitor All Vendors From Check in To Check</li>
                <li className="list-group-item">Distribute Vendor Payments and Gratuities</li>
                <li className="list-group-item">Ceremony Coordination-Rehearsal Not Included</li>
                <li className="list-group-item">Guide The Newlyweds Through Their Reception</li>
                <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
       


         <div className="row">
          <div className="card-body mr-3 ml-3  planning-column">
          <h4 className="mb-0">
          <div className="btn btn-outline-danger btn-lg btn-block text-center text-uppercase  " type="button"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo active">Month Planning</div>
          </h4>
          <div id="collapseTwo" className="panel-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
              <ul className="list-group text-center">
               <img className="card-img-top mx-auto d-block" src={require("../../images/aislejpg.jpg")} alt="image1" />
                <li className="list-group-item">Three Face-To-Face Meetings</li>
                <li className="list-group-item">Finalize Floor Plans</li>
                <li className="list-group-item">Meeting The Month Of </li>
                <li className="list-group-item">Confirm Final Details With Vendors</li>
                <li className="list-group-item">Scheduled Phone and Email Consultations</li>
                <li className="list-group-item">Direct Rehearsal (Up to one hour)</li>
                <li className="list-group-item">Day of Coordination (Up to twelve hours)</li>
                <li className="list-group-item">One Planner and One Assistant</li>
                <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
                <li className="list-group-item">Create and Manage Full Event Timeline</li>
                <li className="list-group-item">Guide The Newlyweds Through Their Reception</li>
                <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
        
           
          <div className="row">
          <div className="card-body ml-3 mr-3 planning-column">
          <h4 className="mb-0">
          <div className="btn btn-outline-danger btn-lg btn-block text-center  text-uppercase"  type="button"  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree active">Full Planning</div>
          </h4>
          <div id="collapseThree" className="panel-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
              <ul className="list-group text-center">
              <img className="card-img-top  mx-auto d-block" src={require("../../images/couplejpg.jpg")} alt="image1" />
                <li className="list-group-item">Three Face-To-Face Meetings</li>
                <li className="list-group-item">Meeting The Month Of </li>
                <li className="list-group-item">Confirm Final Details With Vendors</li>
                <li className="list-group-item">Scheduled Phone and Email Consultations</li>
                <li className="list-group-item">Day of Coordination (Up to twelve hours)</li>
                <li className="list-group-item">Three Vendor Meetings</li>
                <li className="list-group-item">Venue Selection</li>
                <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
                <li className="list-group-item">Venue Selection</li>
                <li className="list-group-item">Budget Development and Tracking</li>
                <li className="list-group-item"> Officiant | Rentals | Florals | Draping | Music Entertainment | Photography | Videography</li>
                <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>   
);




 
