import './Section11.css'
import img1 from '../Assets/img1-section11.png'
import img2 from '../Assets/img2-section11.png'
import img3 from '../Assets/img3-section11.png'
import img4 from '../Assets/img4-section11.png'
function Section11(){
    return(
        <div className="section11">
          <div className='section11-content-top'>
              <hr/>
              <div className="section11-content-top-text">
                <p>Latest from News</p>
              </div>
              </div>
              <div className="section11-content-bottom">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img style={{height:"320px", width:"100px"}}src={img4}/>
              </div>
        </div>
    )
}
export default Section11;