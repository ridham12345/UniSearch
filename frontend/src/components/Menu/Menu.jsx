import signOut from '../../images/signOut.svg'
import menuLogo from '../../images/menuLogo.png'
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="menuParent">
            <div className="logo">
                <img src={menuLogo} alt="UniSearch Logo"/>
            </div>
            <div className="menuItems">
                <ul>
                    {/* route menu items to other screens */}
                    <Link to="/aboutUniSearch"><li>Home</li></Link>
                    <Link to="/home"><li>Explore</li></Link>
                    <Link to="/courses"><li>Courses</li></Link>

                    
                </ul>
            </div>
            {/* signout section */}
            <div className="signOut">
                <img src={signOut} alt="Sign Out" />
            </div>
        </div>
    )
}
export default Menu;