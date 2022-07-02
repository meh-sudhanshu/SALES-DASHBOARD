import Navbar from '../../Components/Navbar/Navbar';
import classes from './profile.module.css'

const Profile =()=>{
    return(
        <div className={classes.profile}>
            <div className={classes.left}>
                <Navbar/>
            </div>
            <div className={classes.right}></div>
        </div>
    )
}


export default Profile;