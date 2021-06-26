import React from "react";
import {Spinner as BsSpinner} from "react-bootstrap";


const Spinner = () => 
    <div className="spinner-container">
      <BsSpinner animation="border" className="spinner-item" variant="primary"/>
    </div>

export default Spinner;
