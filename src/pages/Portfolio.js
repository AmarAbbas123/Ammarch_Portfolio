import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const portfolio = () => {
  const progress = 65;

  return (
    <div>
      <h3>Simple Progress Bar</h3>


      <ProgressBar now={progress} />
    </div >
  );
}


export default portfolio