import Navbar from '../../Components/Navbar/Navbar';
import SmallCard from '../../Components/SmallCard/SmallCard';
import classes from './dashboard.module.css'
import DataChart from '../../Components/DataChart/DataChart';
import MediumCard from '../../Components/MediumCard/MediumCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Dashboard =()=>{
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;


    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      

    const data = [  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
                    {name: 'Page A', uv: 600, pv: 2400, amt: 2400},
                    {name: 'Page A', uv: 200, pv: 2400, amt: 2400},
                    {name: 'Page A', uv: 200, pv: 2400, amt: 2400},
                    {name: 'Page A', uv: 800, pv: 2400, amt: 2400}];
    const data2 = [
                    { name: 'Group A', value: 400 },
                    { name: 'Group B', value: 300 },
                    { name: 'Group C', value: 300 },
                    { name: 'Group D', value: 200 },
                      ];

    const chart1 = <BarChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                    </BarChart>

    const chart2 =  <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={500} height={300}>
                             <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                         </PieChart>
                    </ResponsiveContainer>

    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <Navbar/>
            </div>
            <div className={classes.right}>
               <div className={classes.top}>
                    <DataChart/>
               </div>
               <div className={classes.layer1}>
                    <MediumCard chart={chart1}/>
                    
               </div>
            </div>
        </div>
    )
}


export default Dashboard;