// src/stories/Welcome.tsx
import React from 'react';

interface WelcomeProps {
  // Ajoutez ici les props nécessaires si besoin
}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div>
      <h1>Welcome to react-kariu Library</h1>
      <p>This library will contain several useful components for your React projects.</p>
    </div>
  );
};

export default Welcome;
