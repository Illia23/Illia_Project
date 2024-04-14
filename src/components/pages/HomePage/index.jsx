// HomePage.jsx
import React from 'react';
import home from './home.module.css'
import start from '../../../img/start.jpg'
const HomePage = () => {
  return (
    <div className={home.container}>
      <h1>Welcome to our store</h1>
      <img className={home.image} src={start} alt="foto-start" />
      <h2>Create eye-catching elegance in your garden.</h2>
      <h3>Win hearts and attention with unique wooden garden houses.</h3>
      <p>Your wooden summerhouse is more than just a luxurious upgrade to your yard. This is an investment in your beautiful home. A place where you can work, relax and play on your own terms! It's the perfect place to create unforgettable memories with family and friends.</p>
    </div>
  );
}

export default HomePage;
