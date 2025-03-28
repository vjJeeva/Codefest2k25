import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import backgroundMusic from './sounds/audio.mp3'

// Create audio element
const audio = new Audio(backgroundMusic);
audio.loop = true; // Make music loop
audio.volume = 0.2; // Adjust volume

// Function to start playing music
function startMusic() {
  audio.play().catch(error => {
    console.log("Autoplay was prevented:", error);
    // Optional: Add user interaction to start music
  });
}

// Try to start music when the page loads
window.addEventListener('load', startMusic);

// Add play/pause functionality
function toggleMusic() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Expose toggle function globally
window.toggleMusic = toggleMusic;