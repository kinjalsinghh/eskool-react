import img from '../Assets/section3-image.png'
import arrow from '../Assets/right-arrow.png'
import blur from '../Assets/section3-blur.png'
import './Section3.css'
function Section3(){
    return(
        <div className="section3">
                <div className="section3-left">
                 <div className="section3-tag">
                   <div className="section3-tag-square"></div>
                   <p>WHAT WE DO</p>
                </div>
               <div className="section3-content">
                <p className='section3-content-heading'>New strategies that lead <br/> to a growing in sales</p>
                <div className="section3-content-box">
                   <p className="section3-content-box-number">01</p>
                   <p  className="section3-content-box-text">Aliquam aliquet duis odio diam malesuada amet<br/> vel neque. Malesuada mi cum ibendum.</p>
                </div>
                <div className="section3-content-box">
                   <p className="section3-content-box-number">02</p>
                   <p  className="section3-content-box-text">Ultrices ultrices orci proin sit mauris diam a dolor <br/> diam. Nisl a arcu placerat tellus at vitae non turpis.</p>
                </div>
                <div className="section3-content-box">
                   <p className="section3-content-box-number">03</p>
                   <p  className="section3-content-box-text">Nisi pellentesque felis nulla eros sodales cursus<br/> iaculis fames viverra. Id feugiat a vitae ultrices sed.</p>
                </div>
                <button>Learn more 
                    <img className='arrow-button' src={arrow}/>
                </button>
               </div>
                </div>
               <div className="section3-right">
                <img src={img}/>
               </div>
          </div>

    )
}
export default Section3;