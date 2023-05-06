import React from 'react'
import './athletes.css';
import Athlete from './Athlete';
import data from '../../data.json'

const Athletes = () => {

  const athleteElement = data.map(item => {
  return <Athlete
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              report={item.report}
              imgUrl={item.imgUrl}
              />
})
  return (
    <div className="athletes_dashboard">
      <h1>You have these athletes at your disposal</h1>
    <div className="athletes_list">
      {athleteElement}
    </div>
    </div>
    
  )
}

export default Athletes