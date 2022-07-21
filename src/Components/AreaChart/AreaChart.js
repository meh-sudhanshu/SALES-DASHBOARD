import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Customer',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Profits',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Licence',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Reference',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Trainer',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Course',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Reference',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#5B4B8A" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
