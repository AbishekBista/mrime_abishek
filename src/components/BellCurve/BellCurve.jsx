import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import bellcurve from 'highcharts/modules/histogram-bellcurve';
import highchartsAccessibility from "highcharts/modules/accessibility";
import {data} from './data';
highchartsAccessibility(Highcharts)

bellcurve(Highcharts);



const options = {
    title: {
        text: "Bell curve"
      },

      xAxis: [
        {
          title: {
            text: "Data"
          },
          alignTicks: false
        },
        {
          title: {
            text: "Bell curve"
          },
          alignTicks: false,
          opposite: true
        }
      ],

      yAxis: [
        {
          title: { text: "Data" }
        },
        {
          title: { text: "Bell curve" },
          opposite: true
        }
      ],

      series: [
        {
          name: "Bell curve",
          type: "bellcurve",
          xAxis: 1,
          yAxis: 1,
          baseSeries: 1,
          zIndex: -1
        },
        {
          name: "Data",
          type: "scatter",
          data: data,
          accessibility: {
            enabled: false,
            exposeAsGroupOnly: true
          },
          marker: {
            radius: 1.5
          }
        }
      ]
  }


const BellCurve = () => {

  return (
    <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />

     </div>

  )
}

export default BellCurve