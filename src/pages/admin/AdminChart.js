import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdminChart() {

    const options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Posts by month"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Number of posts",
            valueFormatString: "##0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return  CanvasJS.formatNumber(e.value, "##0");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM YY",
            yValueFormatString: "0",
            dataPoints: [
              { x: new Date("2024-01-01"), y: 1},
              { x: new Date("2024-02-01"), y: 5},
              { x: new Date("2024-03-01"), y: 7},
              { x: new Date("2024-04-01"), y: 1},
              { x: new Date("2024-05-01"), y: 3},
              { x: new Date("2024-06-01"), y: 7},
              { x: new Date("2024-07-01"), y: 3},
              { x: new Date("2024-08-01"), y: 4},
              { x: new Date("2024-09-01"), y: 1},
              { x: new Date("2024-10-01"), y: 3},
              { x: new Date("2024-11-01"), y: 12},
              { x: new Date("2024-12-01"), y: 11},
              { x: new Date("2025-01-01"), y: 11},
              { x: new Date("2025-02-01"), y: 10},
              { x: new Date("2025-03-01"), y: 1},
              { x: new Date("2025-04-01"), y: 3},
              { x: new Date("2025-05-01"), y: 8},
              { x: new Date("2025-06-01"), y: 1},
              { x: new Date("2025-07-01"), y: 9},
              { x: new Date("2025-08-01"), y: 9},
              { x: new Date("2025-09-01"), y: 8}
            ]
        }]
    }
  return (
    <div className='chart-div'><CanvasJSChart options = {options} /></div>
  )
}

export default AdminChart