import arrow from '../Assets/right-arrow.png'
import image from '../Assets/section6-image.png'
import image1 from '../Assets/image1-section6.png'
import image2 from '../Assets/image2-section6.png'
import image3 from '../Assets/image3-section6.png'
import image41 from '../Assets/vector-image4-section6.png'
import './Section6.css'
function Section6(){
    return(
        <div className="section6">
          <div className="section6-top">
          <div className="section6-top-items">
            <div className="section6-top-tag">
                   <div className="section6-top-tag-square"></div>
                   <p>EXPERT COACHING</p>
            </div>
               <div className="section6-top-content">
                 <p className='section6-top-content-heading'>Leadership academy virtual, apply <br/> today with intro price.</p>
                 <p className='section6-top-content-subheading'>Aliquam aliquet duis odio diam malesuada amet</p>
                 <button>Learn more 
                  <img className='arr-img' src={arrow}/>
                 </button>
               </div>
            </div>
          </div>
          <div className="section6-bottom">
            <div className="section6-bottom-top">
                <div className='section6-bottom-top-text'>
                <hr/>
                <div className='section6-bottom-top-text-content'>
                   <div className="section6-square-or"></div>
                   <div>
                   <p>Ut mattis vulputate id enim lorem eu <br/>nullam. Sceleris lobortis phasellus sapien<br/> aliquam ornare accumsan.</p>
                   </div>
                </div>
                
                </div>
                <img className="section6-bottom-top-image"src={image}/>
            </div>
            <div className="section6-bottom-bottom">
                <div className='section6-bottom-bottom-content'>
                    <div className="section6-bottom-bottom-content-items">
                      <img src={image1}/>
                      <div className='section6-bottom-bottom-content-text'>
                        <p className='section6-bottom-bottom-content-text-heading'>Team Coaching</p>
                        <p>Ut mattis vulputate id enim lorem <br/> nullam. Sceleris lobortis phasellus<br/> sapien aliquam ornare.</p>
                      </div>
                    </div>
                    <div className="section6-bottom-bottom-content-items">
                    <img src={image2}/>
                      <div className='section6-bottom-bottom-content-text'>
                        <p className='section6-bottom-bottom-content-text-heading'>High Performance</p>
                        <p>Sceleris lobortis phasellus sapien <br/> aliquam ornare accumsan. Mauris <br/> porttitor et.</p>
                      </div>
                    </div>
                    <div className="section6-bottom-bottom-content-items">
                    <img src={image3}/>
                      <div className='section6-bottom-bottom-content-text'>
                        <p className='section6-bottom-bottom-content-text-heading'>Online Course</p>
                        <p>Dauris porttitor et scelerisque.<br/> Convallis odio commodo liquam<br/> ornare accum.</p>
                      </div>
                    </div>
                    <div className="section6-bottom-bottom-content-items">
                    <img src={image41}/>
                      <div className='section6-bottom-bottom-content-text'>
                        <p className='section6-bottom-bottom-content-text-heading'>Licensed Mentors</p>
                        <p>Eu nullam sceleris lobortis phasellus<br/> sapien aliquam ornare accumsan <br/> sasira louris porttitor et..</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Section6;