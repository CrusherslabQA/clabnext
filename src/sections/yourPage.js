// pages/index.js
import React from 'react';
import Testimonial from './testimonial';

const YourPage = () => {
  return (
    <div>
      <h1>Your Next.js Page</h1>
      <Testimonial>
        {/* Your content goes here */}
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Testimonial>
    </div>
  );
};

export default YourPage;
