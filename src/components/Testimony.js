import React from "react"
import '../CSS/Testimony.css';
    


function Testimony(props) {

    return (
      <>
        <div className="testimonial-container">
          <img 
            className='testimonial-img' 
            src={require(`../img/${props.img}-testimony.png`)}
            alt="Emma's"
          />
         
          <div className="container-text-testimonial">
            <p className="name-testimonial"><strong>{props.name}</strong> in {props.country}</p>
            <p className="position-testimony">{props.position} at <strong>{props.company}</strong></p>
            <p className="text-testimonial">{props.testimonial} <strong>{props.extra}</strong></p>
          </div>
        </div>
      </>
    );
  }
  
  export default Testimony;
  