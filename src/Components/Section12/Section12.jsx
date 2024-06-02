import './Section12.css'
import arrow from '../Assets/right-arrow.png'
function Section12(){
    return(
        <div className="section12">
          <div className="section12-left">
          <div className="section12-tag">
                   <div className="section12-tag-square"></div>
                   <p>EVENT SCHEDULE</p>
                </div>
          </div>
          <div className="section12-right">
            <hr/>
            <div className="section12-right-content">
           
                <p className='section12-number'>30</p>
                <p className='section12-date'>Sep <br/>2022</p>
                <p className='section12-heading'>Business Mastery Meetup <br/><span className='section12-subheading'>Harvard Education Paris France</span></p>
                <button>
                     View Event
                    <img className='arrow-button' src={arrow}/>
                </button>
            </div>
            <hr/>
            <div className="section12-right-content">
           
                <p className='section12-number'>29</p>
                <p className='section12-date'>July <br/>2022</p>
                <p className='section12-heading'>Unleash your power within <br/><span className='section12-subheading'>Harvard Education Paris France</span></p>
                <button>
                     View Event
                    <img className='arrow-button' src={arrow}/>
                </button>
            </div>
            <hr/>
            <div className="section12-right-content">
                <p className='section12-number'>16</p>
                <p className='section12-date'>Dec <br/>2022</p>
                <p className='section12-heading'>Date with destiny leadership <br/><span className='section12-subheading'>Harvard Education Paris France</span></p>
                <button>
                     View Event
                    <img className='arrow-button' src={arrow}/>
                </button>
            </div>
          </div>
    
        </div>
    )
}
export default Section12;