import React from 'react';
import { Link } from 'react-router-dom';
import style from './AboutPage.module.css';  

const AboutPage: React.FC = () => {
  return (
    <div className={style['aboutpage']}>
      <h1>Welcome to the About Page!</h1>
      <p> <Link to="/">Home</Link> </p>
    </div>
  );
}

export default AboutPage;
