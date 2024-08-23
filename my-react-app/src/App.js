import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tamer Senan's Web Demo for Roulettech and Kangacook, Please Scroll Down!
        </p>
        <a
          className="App-link"
          href="https://github.com/tsenan0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tamer's Github
        </a>
        
        <a
          className="App-link"
          href="https://www.linkedin.com/in/tamer-senan-94a114234/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tamer's LinkedIn
        </a>
      </header>

      

      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#61dafb', color: '#333333' }}>
        <h1>Welcome to My Web Demo</h1>
        <p>This is a simple React application demonstrating the use of components, state, and props.</p>

        <div style={{ margin: '20px 0' }}>
          <h2>About This Project</h2>
          <p>
            This project is built using React.js for the frontend and Django for the backend. 
            It serves as a demonstration of basic web development skills, including API integration 
            and dynamic content rendering.
          </p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <h2>Features</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}> 🌴 Simple and clean UI</li>
            <li style={{ margin: '10px 0' }}> 🚀 Responsive design</li>
            <li style={{ margin: '10px 0' }}> ⭐ API integration with Django backend</li>
          </ul>
        </div>

        <div>
          <h2>Contact Me</h2>
          <p>Please Reach out to me with any questions </p>
          <button 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#444444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = 'mailto:tamersaeedsenan@gmail.com'}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
