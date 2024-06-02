import vector1 from '../Assets/vector1.png'
import vector2 from '../Assets/vector2.png'
import image from '../Assets/image-section9.png'
import comma1 from '../Assets/comma1.png'
import comma2 from '../Assets/comma2.png'
import recatangleblur from '../Assets/rectangleblur-section9.png'
import circleblur from '../Assets/circleblur-section9.png'
import './Section9.css'
function Section9(){
    return(
        <div className="section9">
           <div className='section9-vectors'>
            <img className="vector1" src={vector1}/>
            <img className="vector2" src={vector2}/>
            </div>
            <div className="section9-contents">
                <div className="section9-contents-left">
                    
                    <img className='main-img' src={image}/>
                </div>
                <div className="section9-contents-right">
                    <div className="comma">
                    <img src={comma1}/>
                    <img src={comma2}/>
                    </div>
                    <p>Finally, a coaching program with a passionate<br/> community that helps to address essential<br/> growth questions in a structured way.</p>
                </div>
            </div>
        </div>
    )
}
export default Section9;