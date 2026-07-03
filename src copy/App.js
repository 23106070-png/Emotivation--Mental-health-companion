import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from './images/img.png'; 
import './App.css';
import img1 from './images/img1.avif';
import img2 from './images/img2.jpeg';
import Mood from './pages/Mood/Mood';
import Chat from './pages/Chat/Chat';
import Consult from './pages/Consult/Consult';
import Moodup from './pages/Moodup/Moodup';
import Resource from './pages/Resource/Resource';

const Home = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <>
      <div>
        <div className="page1">
          <div className="navbar">
            <div className="logo">
              <img src={img} alt="logo" className='logo' />
            </div>
            <div className="links">
              <Link to="/" className='grey'>Home</Link>
              <Link to="/mood-tracker" className='grey'>Mood Tracker</Link>
              <Link to="/chat" className='grey'>Chat with AI</Link>
              <Link to="/consult" className='grey'>Consult to Dr.</Link>
              <Link to="/resources" className='grey'>Resources</Link>
            </div>
          </div>
          <div className="header">
            <h1 className='emotivate'>Emotivation</h1>
            <p className='slogan'>Elevate Your Mental Health</p>
          </div>
          <div className="para1">
            <p>According to WHO, more than 720000 people commit suicide due to mental stress. So to minimize it 'Emotivation' is formed. Emotivation is a platform designed to enhance and support your mental well-being. By combining motivational content, expert advice, and mindfulness tools, it aims to help individuals manage stress, anxiety, and mental fatigue more effectively.</p>
          </div>
        </div>
        <div className="content1">
          <h2 className='features'>Our key features</h2>
          <div className="key">
            <div className="mood">
              <h2><FontAwesomeIcon icon={faFaceSmile} /> Mood Tracker</h2>
              <p className='info'>Track your emotional ups and downs with our Mood Tracker. By logging your feelings daily, you can visualize your emotional journey, spot patterns, and understand how certain events or activities impact your mood. Use this data to make informed decisions for your mental health improvement.</p>
              <Link to="/mood-tracker"><FontAwesomeIcon icon={faArrowRight} className='a1'/></Link>
            </div>
            <div className="chat">
              <h2><FontAwesomeIcon icon={faFaceSmile} /> Chat with AI</h2>
              <p className='info'>Sometimes, talking helps. Our AI-powered chatbot is available 24/7 to assist you with personalized support. Whether you're seeking advice, motivation, or a comforting conversation, the AI is here to listen, engage, and guide you through challenging emotions.</p>
              <Link to="/chat"><FontAwesomeIcon icon={faArrowRight} className='a1'/></Link>
            </div>
            <div className="refresh">
              <h2><FontAwesomeIcon icon={faFaceSmile} /> Mood Uplifter</h2>
              <p className='info'>Boost your mood instantly with our carefully curated mood refreshers. From uplifting music to positive affirmations and mindfulness exercises, these tools are designed to help reset your mindset, relieve stress, and bring a burst of positivity into your day.</p>
              <Link to= "/mood-tracker/moodup"><FontAwesomeIcon icon={faArrowRight} className='a1'/></Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="content2">
          <img src={img1} alt="stress" height={300} />
          <div className="idea">
            <h1 className='matter'>Why Mental Health Matters</h1>
            <p className='info'><h2>Emotional Well-being:</h2> Mental health influences how we manage stress, relate to others, and make decisions, directly affecting overall life satisfaction.</p>
            <p className='info'><h2>Physical Health:</h2> Good mental health supports better physical health, reducing the risk of conditions like heart disease, weakened immunity, and chronic pain.</p>
            <p className='info'><h2>Productivity and Functionality:</h2> Positive mental health enhances focus, efficiency, and performance at work, school, or daily tasks, leading to better outcomes.</p>
          </div>
        </div>
        <hr />
        <div className="content3">
          <div className="idea">
            <h1 className='matter'>Our Commitment to You</h1>
            <p className='info'><h2>No Judgment, Just Support:</h2> Our platform is a judgment-free zone. We guarantee that no matter what you're going through, our goal is to provide thoughtful responses and emotional support without bias.</p>
            <p className='info'><h2>Privacy:</h2> We guarantee that all of your personal data and conversations will remain private and secure. Your information is protected with advanced encryption, ensuring that your discussions stay between you and our platform.</p>
            <p className='info'><h2>Encouragement and Motivation:</h2> By engaging with users and offering positive reinforcement, it can motivate them to stay focused on their goals, promoting mental well-being.</p>
          </div>
          <img src={img2} alt="stress" height={350} />
        </div>
        <hr />
        <div className={`feedback ${submitted ? 'submitted' : ''}`}>
          <h1 className='FB'>Feedback</h1>
          <textarea 
            name="feed" 
            id="back" 
            placeholder='Write your feedback here-' 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type='submit' className='butt' onClick={handleSubmit}>Submit</button>
          {submitted && <p className='submit-message'>Feedback Submitted!</p>}
        </div>
      </div>
    </>
  );
};

const App = () => {
  useEffect(() => {
    const motivationalQuotes = [
      "Good morning! Today is a fresh start, a new opportunity to chase your dreams. Make it count!",
      "Wake up with determination, go to bed with satisfaction. Today is yours to conquer!",
      "A little progress each day adds up to big results. Stay consistent and keep moving forward!",
      "Rise and shine! The best way to predict your future is to create it. Make today amazing!",
      "The morning sun reminds us that no matter how dark yesterday was, today is a new beginning. Seize the day!",
      "Believe in yourself and all that you are. You have the potential to achieve greatness today!",
      "Success doesn’t come to you, you go to it. Get up, get ready, and go after it!",
      "Each morning we are born again. What you do today matters the most!",
      "Don't let yesterday's failures hold you back. Today is a new day full of possibilities!",
      "You are capable of amazing things. Start today with confidence, and let that power carry you through the day!"
    ];

    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    alert(randomQuote);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mood-tracker" element={<Mood />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/mood-tracker/moodup" element={<Moodup />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
    </Router>
  );
};

export default App;
