import classes from './customer_table.module.css'
const CustomerTable =()=>{
    return(
<table className={classes.table}>
        <thead>
            <tr>
                <th>NAME</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Company</th>
                <th>Course</th>
                <th>Fees</th>
                <th>Payment Source</th>
                <th>Certification Status</th>
                <th>Country</th>
                <th>........</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sudhanshu</td>
                <td>sudhanshukumar8816@gmail.com</td>
                <td>7203868659</td>
                <td>Avizva</td>
                <td>Full satck</td>
                <td>Paid</td>
                <td>Online</td>
                <td>Certified</td>
                <td>India</td>
                
            </tr>
            <tr>
                <td>Sudhanshu</td>
                <td>001</td>
                <td>1st class</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Sudhanshu</td>
                <td>001</td>
                <td>1st class</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Sudhanshu</td>
                <td>001</td>
                <td>1st class</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Sudhanshu</td>
                <td>001</td>
                <td>1st class</td>
                <td>A</td>
            </tr>
        </tbody>
        <tfoot>
            <button>See More</button>
        </tfoot>
    </table>
    )
}

export default CustomerTable