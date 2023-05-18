import React from 'react';
import './HomePage.css';  
import TestComponent from '../../components/TestComponent/TestComponent';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Application!</h1>
      <p>This is the home page for my React application.</p>
      <TestComponent text="This is a test component" />
    </div>
  );
}

export default HomePage;
