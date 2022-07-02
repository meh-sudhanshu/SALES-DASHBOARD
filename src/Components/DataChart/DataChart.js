import classes from './datachart.module.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const DataChart =()=>{
    const data = [  {name: 'Visits', uv: 400, pv: 2400, amt: 2400},
                    {name: 'Trainers', uv: 200, pv: 1400, amt: 2400},
                    {name: 'courses', uv: 600, pv: 2400, amt: 2400},
                    {name: 'profits', uv: 800, pv: 2400, amt: 2400},
                    {name: 'revenue', uv: 680, pv: 2400, amt: 2400}];
    return(
        <div className={classes.chart}>
           <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}


export default DataChart