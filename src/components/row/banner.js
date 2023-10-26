import './banner.css'
import { play,home2,wave1 } from '../../index'
function Banner(){
    return(
        <section id="banner">
    <div classNameName="container" />
        <div className="row">
            <div className="col-md-6">
                <p className="promo-title">Best Digital Agency</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis 
                    Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                </p>
                <a href="#"><img src={play} alt="play-btn" className="play-btn" />Watch Tutorials</a>
            </div>
            <div className="col-md-6 text-center"> 
                <img src={home2}  alt="home" className="img-fluid" /> 
        </div>
    </div>
    <img src={wave1} alt="bottom img" className="bottom-img" />
</section>
    )
    
}

export default Banner