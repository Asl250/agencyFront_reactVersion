import './services.css'
import { servise1,servise2,servise3 } from '../../index'
function Services(){
    return(
    <section id="services"> 
        <div className="container">
            <h1 className="title text-center">WHY CHOOSE US?</h1>
            <div className="row text-center">
                <div className="col-md-4 services">
                    <img src={servise1}className="service-img" />                
                    <h4>Growth Marketing</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis 
                        Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                    </p>
                </div>
                <div className="col-md-4 services">
                    <img src={servise2}  className="service-img" />                
                    <h4>Online Branding</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis 
                        Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                    </p>
                </div>
                <div className="col-md-4 services">
                    <img src={servise3} className="service-img" />          
                    <h4>Animated Ads</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis 
                    </p>
                </div>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-primary">All Services</button>
            </div>
        </div>
    </section>
    )
}
export default Services