import './navBar.scss';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const NavBar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span >
                        SanuSocial
                    </span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
                <GridViewOutlinedIcon />
                <div className='searchbar'>
                    <SearchOutlinedIcon />
                    <input type='text' placeholder='search...' />
                </div>
            </div>
            <div className='right'>
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt='' />
                    <span>Sanidhya Rathore</span>
                </div>
            </div>
        </div>
    )

}

export default NavBar