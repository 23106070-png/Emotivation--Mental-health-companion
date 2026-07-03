const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path'); 
const GEMINI_API_KEY = "AIzaSyBxwrnfgo1e28qVsjEaNrnOGQpD5MJSGqc";
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
}));


app.post('/api/gemini', async (req, res) => { 
  try {
    const { query } = req.body;
    const response = await fetch('https://gemini.googleapis.com/v1/models/chat:predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res.json({ message: data.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
