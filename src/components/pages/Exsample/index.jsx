// ExamplesPage.jsx
import React from 'react';
import Image from 'components/images/Image';
import exs from './exsamples.module.css'
const ExamplesPage = () => {
  return (
    <div className={exs.container}>
      <ul className={exs.list}>
        <h1>Examples of Work</h1>
        <p>Here are some examples of our work.</p>
      </ul>
      
      <Image />
      
    </div>
  );
}

export default ExamplesPage;