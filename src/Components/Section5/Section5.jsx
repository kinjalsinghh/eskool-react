import vector1 from '../Assets/vector1-section5.png'
import vector2 from '../Assets/vector2-section5.png'
import image from '../Assets/section5-image.png'
import blurimg from '../Assets/section5-blur.png'
import './Section5.css'
function Section5(){
    return(
        <div className="section5">
         <div className="section5-vectors">
            <img className="section5-vectors-vector1" src={vector1}/>
            <img className="section5-vectors-vector2" src={vector2}/>
         </div>
          <div className="section5-content">
          <div className="section5-tag">
                   <div className="section5-tag-square"></div>
                   <p>OUR SERVICES</p>
                </div>
          <div className="section5-content-text">
            <p className='section5-content-text-heading'>
                Our full Services
            </p>
            <p className='section5-content-text-lines'>Meet the team</p>
            <p className='section5-content-text-lines'>Customer support</p>
            <p className='section5-content-text-lines'>Our value</p>
            <p className='section5-content-text-lines'>Business toolkit</p>
            <p className='section5-content-text-lines'>Corporate coach</p>
          </div>
          </div>
          <div className="section5-image">
            <img className='section5-image-main' src={image}/>
            <div className='section5-image-blur'>
                <img src={blurimg}/>
            </div>
          </div>
        </div>
    )
}
export default Section5;