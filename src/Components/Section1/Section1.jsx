import './Section1.css'
import homeimg from '../Assets/home-img.png'
import circle from '../Assets/circle-home-blur.png'
import vector1 from '../Assets/vector1-section1.png'
import vector2 from '../Assets/vector2-section2.png'
function Section1(){
    return(
        <div className="section1">
          <div className='section1-vectors'>
            <img className="section1-vector1" src={vector1}/>
            </div>
          <div className='section1-left'>
             <img className='section1-homeimg' src={homeimg}/>
             <div className="section1-img-blur1">
             <img className='section1-circle' src={circle}/>
             </div>
          </div>
          <div className='section1-right'>
            <p>Coached by the <span>world’s</span> <br/> <span>top experts</span> in the field</p>
            <div className='section1-right-content'>
            Aliquam aliquet duis odio diam<br/>malesuada amet vel neque. Malesuada<br/> mi cum ibendum neque integer interdum.
            </div>
            <button className='section1-right-button'>Contact Now</button>
          </div>
        </div>
    )
}
export default Section1;