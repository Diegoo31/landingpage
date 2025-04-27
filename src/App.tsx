import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import GitHubRepositories from './components/ProjectSuggestions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <GitHubRepositories />
      <Contact />
    </div>
  );
}

export default App;