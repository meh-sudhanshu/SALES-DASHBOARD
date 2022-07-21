import ListNavbar from '../../Components/ListNavbar/ListNavbar'
import classes from './profit_reports.module.css'
import ListDataWrapper from '../../Components/ListDataWrapper/ListDataWrapper'
import { useState } from 'react'

const ProfitReportsList =()=>{

    const [data,setData] = useState([])
    fetch('http://localhost:8080/profitReport/getAllProfitReports')
      .then(response => response.json())
      .then(data => setData(data));

    return(
        <div className={classes.list_wrapper}>
            <div className={classes.nav_ctn}>
                <ListNavbar/>
            </div>
            <div className={classes.list_ctn}>
              {
                data.map(item=><ListDataWrapper data={item} key={Math.random(1)}/>)
              }
            </div>
        </div>
    )
}

export default ProfitReportsList