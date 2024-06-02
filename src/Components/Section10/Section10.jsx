import image from '../Assets/section10-image.png'
import arrow from '../Assets/right-arrow.png'
import './Section10.css'
function Section10(){
    return(
        <div className="section10">
            <div className="section10-left">
                <img src={image}/>
               </div>
                <div className="section10-right">
               <div className="section10-content">
                <p className='section10-content-heading'>New strategies that lead <br/> to a growing in sales</p>
                <div className="section10-content-box">
                   <p className="section10-content-box-number">01</p>
                   <p  className="section10-content-box-text">Aliquam aliquet duis odio diam malesuada amet<br/> vel neque. Malesuada mi cum ibendum.</p>
                </div>
                <div className="section10-content-box">
                   <p className="section10-content-box-number">02</p>
                   <p  className="section10-content-box-text">Ultrices ultrices orci proin sit mauris diam a dolor <br/> diam. Nisl a arcu placerat tellus at vitae non turpis.</p>
                </div>
                <div className="section10-content-box">
                   <p className="section10-content-box-number">03</p>
                   <p  className="section10-content-box-text">Nisi pellentesque felis nulla eros sodales cursus<br/> iaculis fames viverra. Id feugiat a vitae ultrices sed.</p>
                </div>
                <button>Learn more 
                    <img className='arrow-button' src={arrow}/>
                </button>
               </div>
                </div>
               
          </div>

    )
}
export default Section10;