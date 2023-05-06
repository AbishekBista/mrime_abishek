import React, {useState} from 'react'

import './athletesdetail.css';
import scan_img from "../../assets/scan.png";
import BellCurve from '../../components/BellCurve/BellCurve';
import { useParams } from 'react-router-dom';
import data from '../../data.json'

const AthletesDetail = () => {

  const params = useParams();
  console.log(params.id)

  const [item, setItem] = useState(data.filter(player => {
    if(player.id === params.id)
      return {...player}
  }));
  return (
    <div className="athletes_detail">
      <div className="main_div">
            {/* Input form */}
          <div className="athletes_detail-input">
            <label htmlFor="report_date" className="label_date">
              Select Date
              <input type="date" id="report_date" placeholder=""/>
            </label>
            <label htmlFor="report_type" className="label_type">
              Report Type
              <select id="report_type">
                <option>Grey Matter Report</option>
              </select>
            </label>
            <button type="button" className="generate_button">Generate</button>
          </div>

          {/* Grey matter image */}
          <div className="athletes_detail-scan">
            <p className="athletes_detail-scan-text">Grey Matters</p>
            <img src={scan_img} alt="brain scan"/>
          </div>

          {/* Statistics */}
          <div className="athletes_detail-statistics">
            <h2>Statistics</h2>
            <p>Volume: 0.5L</p>
            <p>Normal Range: 0.2L - 0.7L</p>
          </div>

          {/* Chart */}
          <div className="athletes_detail-chart">
            <h2>Normal Distribution</h2>
            <div><BellCurve /></div>
          </div>

          {/* Interpretation */}
          <div className="athletes_detail-interpretation">
            <h2>Interpretation</h2>
            <p>{item.report}</p>
          </div>
      </div>

      <div className="aside_div">
        <div className="athletes_detail-info">
          <img src={item.imgUrl} alt="profile" />
          <h2>{item.name} <span className="age">({item.age} years)</span></h2>
          <p>Tel: {item.phone}</p>
          <p>Email: {item.email}</p>
        </div>

        <div className="athletes_details-conclusion">
          <p>{item.report}</p>
        </div>
      </div>
      

      {/* aside - info & conclusion*/}


    </div>
  )
}

export default AthletesDetail