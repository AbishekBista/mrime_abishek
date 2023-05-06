import React from 'react'
import './athletes.css';
import { Link } from 'react-router-dom';

const Athlete = (props) => {
  return (
    <div className="athletes_card">
          <img src={props.imgUrl} alt={props.name} />  
        <div className="athletes_info">
          <h2>{props.name}</h2>
          <p>{props.email}</p>

          <Link to={props.id}
          >
            <p className="report">Report</p>
          </Link>
          
        </div>
      </div>
  )
}

export default Athlete