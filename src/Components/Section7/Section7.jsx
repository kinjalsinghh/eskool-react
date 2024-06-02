import image from '../Assets/section7-image.png'
import './Section7.css'
function Section7(){
    return(
        <div className="section7">
            <div className="section7-contents">
           <div className="section7-left">
              <img src={image}/>
             
           </div>
           <div className="section7-right">
              <div className="section7-right-contents">
                <div className="section7-right-contents-tag">
                <div className='square'></div>
                <p>NEW COURSE</p>
                </div>
                <div className="section7-right-contents-text">
                    <p className='date'>June 23/2023</p>
                    <p className='heading'>Management for <br/> Creativities</p>
                    <p className='subheading'>Ut mattis vulputate id enim lorem eu<br/> nullam. Sceleris lobortis phasellus sapien<br/> aliquam ornare.</p>
                <button>
                    Enroll now 
                </button>
                </div>

              </div>
           </div>
           </div>
        </div>
    )
}
export default Section7;