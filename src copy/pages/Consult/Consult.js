import React from 'react';
import './consult.css'
import Ad from './../../images/AD.jpeg'
import Nk from './../../images/NK.jpeg'
import Rs from './../../images/ridhi.jpg'
import pk from './../../images/pk.jpeg';
const Consult = () => {
  return (
    <>
      <div className="consult">
<h1 className='psy'>Our Profestionals</h1>
<div className="dr1">
<div className="deta">
  <p><h1>1.</h1>Name: Dr. Ajit Dandekar</p>
  <p>Degree:MBBS, MD - Psychological Medicine</p>
  <p>Work at: Vileparle West, Mumbai</p>
  <p>Availabe: 09:00 AM - 12:00 AM</p>
  <p>Mobile number: <a href="#">8116542357</a></p>
  <p>Email: <a href="#">ajitdandekar12@gmail.com</a></p> 
   
</div>
<img src={Ad} alt="img" className='unknown' />

</div>
<div className="dr1">
<img src={Nk} alt="img" className='unknown'/>
<div className="deta">
  <p><h1>2.</h1>Name: Dr. Nisha Khanna</p>
  <p>Degree: PhD in Psychology - G.N.D.U., Amritsar, India</p>
  <p>Work at:  Max Healthcare</p>
  <p>Availabe: 09:00 AM - 12:00 AM</p>
  <p>Mobile number:<a href="#">9216542357</a></p>
  <p>Email: <a href="#">nishakhanna22@gmail.com</a></p>  
</div>



</div>
<div className="dr1">
<div className="deta">
  <p><h1>3.</h1>Name:Ms. Riddhi Sagar</p>
  <p>Degree:MA - Psychology</p>
  <p>Work at: Vileparle West, Mumbai</p>
  <p>Availabe: 11:00 AM - 08:00 PM</p>
  <p>Mobile number: <a href="#">9521642357</a></p>
  <p>Email: <a href="#">ridhisgar03@gmail.com</a></p> 
   
</div>
<img src={Rs} alt="img" className='unknown' />

</div>
<div className="dr1">
<img src={pk} alt="img" className='unknown' width={200}/>
<div className="deta">
  <p><h1>4.</h1>Name: Dr. Purvi Kukdeja</p>
  <p>Degree: Phd in psychology </p>
  <p>Work at:  Online counsellor  </p>
  <p>Availabe: 11.00am to 9.00am</p>
  <p>Mobile number:<a href="#">9276069489</a></p>
  <p>Email: <a href="#">purvikukdeja@gmail.com</a></p>  
</div>
</div>

      </div>
    </>
  );
}

export default Consult;
