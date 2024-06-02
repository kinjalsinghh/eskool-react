import logo from '../Assets/logo.png'
import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
             <div className="navbar-logo">
                <img src={logo}/>
                <p>ESKOOL</p>
             </div>
             <div className='navbar-menu'>
                <div className='nav-tag'>
                <div className="nav-square"></div>
                   <p>Home</p>
                </div>
                <ul >
                    <li>About</li>
                    <li>Courses</li>
                    <li>Podcast</li>
                </ul>
                <button>Contact Now</button>
            </div>
                
        </div>
    )
}
export default Navbar;
