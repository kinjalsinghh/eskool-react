import './Footer.css'
import logo from '../Assets/logo.png'
function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
           <div className="footer-logo">
              <img src={logo}/>
              <p>ESKOOL</p>
           </div>
           <div className="footer-content-1">
             <hr/>
             <p className='footer-heading'>
              Contact Info
             </p>
             <p className='footer-subheading'>
             + 907 683 8196 <br/> 828 Timbercrest Road, <br/>Healy City, AK 99743 <br/> eskool@info.com
             </p>
           </div>
           <div className="footer-content-2">
            <hr/>
            <p className='footer-heading'>
                Our Online Courses
            </p>
            <p className='footer-subheading'>
                Lnaguage classes <br/>
                Photography online <br/>
                Communication Skills <br/>
                Entrepreneurs & Business <br/>
                Design Skills<br/>
                Developing Courses<br/>
                Business Coaching
            </p>
           </div>
           <div className="footer-content-3">
             <hr/>
             <p className='footer-heading'>
              Social Media
             </p>
             <p className='footer-subheading'>
             Facebook <br/>Linkedin <br/>Instagram<br/>Dribble<br/>Behance
             </p>
           </div>
           </div>
           <div className="footer-bottom">
            <hr className='endline'/>
           </div>
        </div>
    )
}
export default Footer;