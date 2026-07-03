import React from 'react';
import './moodup.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
class Moodup extends React.Component {
    
    render() { 
        return (
            <>
            <div className="moodup">
            <h1 className='heading'>Approaches to Foster a Sense of Well-being</h1>
            <ul>
                <h2 className='ways'>1.Try to take a deep breath and concentrate on your feets.</h2>
                <h2 className='ways'>2.Hold a ice cube in your hand.</h2>
                <h2 className='ways'>3.Check yourself in the mirror.</h2>
                <h2 className='ways'>4.Talk to our AI bot. Or a person who brings peace to you try to let it out.</h2>
                <h2 className='ways'>5.Don't lay down on bed.</h2>
                <h2 className='ways'>6.Wash your feets with cold water.</h2>
                <h2 className='ways'>7.Try to hug a pelow tightly if you dont have a person.</h2>
            </ul>
            <br />
            <div className="main">
            <Link to="https://open.spotify.com/playlist/46Fol0fTPm2fvgVcqhthwX?si=YPjkx2FjTby_nqNol0Gx6g&pi=a-kSIB8B6oSZGy" className="link-style">
  <div className="miuu">
    <h1 className='tune'>Tunes to Promote Positive Well-being</h1>
  </div>
</Link>

            </div></div>
            </>
        );
    }
}
 
export default Moodup ;