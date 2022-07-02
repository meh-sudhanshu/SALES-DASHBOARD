import classes from './navbar.module.css'
import app_logo from '../../Assets/Logo/app_logo.png'
import {NavLink} from 'react-router-dom'
import dashboard_logo from '../../Assets/Logo/dashboard.png'
import get_logo from '../../Assets/Logo/get.png'
import post_logo from '../../Assets/Logo/post.png'
import profile_logo from '../../Assets/Logo/profile.png'
import help_logo from '../../Assets/Logo/help.png'
const Navbar =()=>{

    const navLinkStyles =({isActive})=>{
        return{
            backgroundColor: isActive ? "#51bcda" :"none"
        }
    }
    return(
        <nav className={classes.navbar}>
            <div className={classes.logo_ctn}>
                <img src={app_logo} alt="" className={classes.img_logo}/>
                <h6 className={classes.txt_logo}>ULS SALES</h6>
            </div>
            <div className={classes.link_ctn}>
                <NavLink to="/" className={classes.link} style={navLinkStyles}>
                    <div className={classes.link_wrapper}>
                        <img src={dashboard_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>DASHBOARD</h5>   
                    </div>
                </NavLink>
                
                <NavLink to="/get" className={classes.link} style={navLinkStyles}>
                    <div className={classes.link_wrapper}>
                        <img src={get_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>GET</h5>   
                    </div>
                </NavLink>


                <NavLink to="/post" className={classes.link} style={navLinkStyles}>
                    <div className={classes.link_wrapper}>
                        <img src={post_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>POST</h5>   
                    </div>
                </NavLink>


                <NavLink to="/profile" className={classes.link} style={navLinkStyles}>
                    <div className={classes.link_wrapper}>
                        <img src={profile_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>PROFILE</h5>   
                    </div>
                </NavLink>


                <NavLink to="/helpAndSupport" className={classes.link} style={navLinkStyles}>
                    <div className={classes.link_wrapper}>
                        <img src={help_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>HELP AND SUPPORT</h5>   
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;