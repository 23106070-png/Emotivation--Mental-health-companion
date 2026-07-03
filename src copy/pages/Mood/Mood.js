import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam, faFaceFrown, faFaceAngry, faFaceFlushed } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './mood.css';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const Mood = () => {
  const [moodData, setMoodData] = useState([
    { time: getCurrentTime(), happy: 0, sad: 0, angry: 0, fear: 0 },
  ]);
  const [message, setMessage] = useState('');
 
  const updateMood = (moodType) => {
    const currentTime = getCurrentTime();
    const lastEntry = moodData[moodData.length - 1];

    
    let newMessage = '';
    switch (moodType) {
      case 'happy':
        newMessage = 'Yaah Good, Have a nice day';
        break;
      case 'sad':
        newMessage = 'What happened to you? Is everything okay? You can talk to our chatbot or try music or exercises.';
        break;
      case 'angry':
        newMessage = 'Be calm, listen to music, or do some exercise. You will feel better.';
        break;
      case 'fear':
        newMessage = 'What happened to you? Is everything okay? You can talk to our chatbot or try music or exercises.';
        break;
      default:
        newMessage = '';
    }
    setMessage(newMessage); 
    if (lastEntry.time === currentTime) {
      const updatedMoodData = moodData.map((entry) =>
        entry.time === currentTime
          ? { ...entry, [moodType]: entry[moodType] + 1 }
          : entry
      );
      setMoodData(updatedMoodData);
    } else {
      
      setMoodData([
        ...moodData,
        { time: currentTime, happy: moodType === 'happy' ? 1 : 0, sad: moodType === 'sad' ? 1 : 0, angry: moodType === 'angry' ? 1 : 0, fear: moodType === 'fear' ? 1 : 0 },
      ]);
    }
  };

  
  const data = {
    labels: moodData.map((entry) => entry.time), 
    datasets: [
      {
        label: 'Happy',
        data: moodData.map((entry) => entry.happy), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sad',
        data: moodData.map((entry) => entry.sad), 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Angry',
        data: moodData.map((entry) => entry.angry), 
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Fear',
        data: moodData.map((entry) => entry.fear), 
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mood Tracker (Time-based)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Mood Intensity',
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time of Day',
        },
      },
    },
  };

  return (
    <>
      <div className="mood1">
        <h1 className="head">Track Your Mood Here</h1>
        <br />
        <br />
        <div className="how"><h1>How is Your Mood Right Now?</h1></div>
        <div className="moods">
          <div className="happy" onClick={() => updateMood('happy')}>
            <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#0e745f' }} />
            <p>Happy</p>
          </div>
          <div className="sad" onClick={() => updateMood('sad')}>
            <FontAwesomeIcon icon={faFaceFrown} style={{ color: 'blue' }} />
            <p>Sad</p>
          </div>
          <div className="anger" onClick={() => updateMood('angry')}>
            <FontAwesomeIcon icon={faFaceAngry} style={{ color: 'red' }} />
            <p>Angry</p>
          </div>
          <div className="fear" onClick={() => updateMood('fear')}>
            <FontAwesomeIcon icon={faFaceFlushed} style={{ color: 'purple' }} />
            <p>Fear</p>
          </div>
        </div>

        
        <div className="message" style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>{message}</h2>
        </div>

        
        <div style={{ width: '50%', margin: '0 auto', marginTop: '20px' }}>
          <h2>Today's Mood Data</h2>
          <Bar data={data} options={options} />
        </div>
        <div className="goto">
        <Link to= "/chat"> <button>Chatbot</button></Link>
        <Link to= "/mood-tracker/moodup"><button>Mood UpLifter</button></Link>
       
        </div>
      </div>
    </>
  );
};

export default Mood;
