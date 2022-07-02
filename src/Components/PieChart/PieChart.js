import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../../Assets/GlobalCSS/global.css'
const data = [
  {
    subject:"Customer",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Reference',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Trainer',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Profit Report',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Invoice',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Licence',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Course Catalog',
    A: 65,
    B: 85,
    fullMark: 150,
  }
];
const clickHandler =(event)=>{
    console.log(event.value)
  }

const style={
    cursor:"pointer",
}
export default class Chart extends PureComponent {
 

  render() {
    return (
       
      <ResponsiveContainer width="80%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" onClick={clickHandler} style={style} />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
