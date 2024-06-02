import './Section4.css'
import arrow from '../Assets/arrow-right-white.png'
function Section4(){
    return(
        <div className="section4">
          <div className='section4-content'>
              <hr/>
              <div className="section4-content-text">
                <p>High performance team coaching.<br/> Join us and grow.</p>
              </div>
              <button>Learn more 
                <img className='arr-img' src={arrow}/>
              </button>
          </div>
        </div>
    )
}
export default Section4;