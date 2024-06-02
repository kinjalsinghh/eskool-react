import './Section2.css'
import arrow from '../Assets/right-arrow.png'
import vector1 from '../Assets/Vector1-section2.png'
import vector2 from '../Assets/vector2-section2.png'
import logo from '../Assets/logo-white.png'
import arrowwhite from '../Assets/arrow-right-white.png'
function Section2(){
    return(
        <div className="section2">
          <div className="section2-top">
            <div className="section2-top-items">
            <div className="section2-top-tag">
                   <div className="section2-top-tag-square"></div>
                   <p>ABOUT US</p>
            </div>
               <div className="section2-top-content">
                <p>Coached by top experts on the topic <br/> about your ultimate goals.</p>
                <button>Learn more 
                    <img className='arrow-button' src={arrow}/>
                </button>
               </div>
               <hr className='section2-top-hr'/>
            </div>
          </div>    
          <div className="section2-bottom">
            <div className='section2-bottom-vectors'>
            <img className="section2-bottom-vector2" src={vector2}/>
            <img className="section2-bottom-vector1" src={vector1}/>
            </div>
            <div className="section2-bottom-items">
                <div className="section2-bottom-items-card1">
                    <p>Digital Agency <br/> Coaching & <br/> Mentoring for <br/> Online Success</p>
                    <button>
                    Learn more 
                    <img className='arrow-button' src={arrow}/>
                    </button>
                </div>
                <div className="section2-bottom-items-card2">
                   <img className="section2-bottom-items-card2-img" src={logo}/>
                   <p>Start and Grow <br/> a Business</p>
                    <button>
                    Learn more 
                    <img className='arrow-button' src={arrowwhite}/>
                    </button>
                </div>
                <div className="section2-bottom-items-card3">
                    <p>Start and Grow <br/> a Business</p>
                    <button>
                    Learn more 
                    <img className='arrow-button' src={arrow}/>
                    </button>
                </div>
            </div> 
          </div>
        </div>
    )
}
export default Section2;