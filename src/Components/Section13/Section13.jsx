import './Section13.css'
import arrow from '../Assets/right-arrow.png'
import arrwh from '../Assets/arrow-right-white.png'
import img1 from '../Assets/img1-section13.png'
import img2 from '../Assets/img2-section13.png'
import img3 from '../Assets/img3-section13.png'
import img4 from '../Assets/img4-section13.png'
import img5 from '../Assets/img5-section13.png'
import img6 from '../Assets/img6-section13.png'
function Section13(){
    return(
        <div className="section13">
            <div className="section13-top">
            <div className="section13-tag">
                   <div className="section13-tag-square"></div>
                   <p>WHO ARE OUR CLIENT</p>
                </div>
            <div className="section13-subscription">
                <p className='section13-subs-text'>Subscribe and find out more about <br/> what we can do for you!</p>
                <div className='subscribe'>
                <input type="text" placeholder='Email'/>
                <p>Subscribe <img src={arrow}/></p>
                </div>
                <hr/>
                
            </div>
            </div>
            <div className="section13-bottom">
                <div className="section13-bottom-content">
                    <div className="section13-bottom-content-top">
                    <img style={{height:"400px", width:"600px"}}className='section13-img1' src={img1}/>
                    <img style={{height:"400px",width:"300px"}}className='section13-img2' src={img2}/>
                    <img style={{height:"400px",width:"300px"}}className='section13-img3' src={img3}/>
                    </div>
                    <div className="section13-bottom-content-bottom">
                    <img style={{height:"400px",width:"300px"}}className='section13-img4' src={img4}/>
                    <img style={{height:"400px",width:"300px"}}className='section13-img5' src={img5}/>
                    <img  style={{height:"400px", width:"600px"}}className='section13-img6' src={img6}/>
                    </div>
                </div>
            </div>
            <div className="section13-base">
            <div className='section13-content'>
              <hr className='base-hr'/>
              <div className="section13-content-text">
                <p>High performance team coaching.<br/> Join us and grow.</p>
              </div>
              <button>Learn more 
                <img className='section13-arr-img' src={arrwh}/>
              </button>
          </div>
            </div>
          </div>

    )
}
export default Section13;