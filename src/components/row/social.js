import './social.css'
import { facebook,instagram,twitter,whatsap,linkedin,snapchat } from '../../index'
function Social(){
    return(
        <section id="social-media">
        <div className="container text-center">
            <p>FIND US ON SOCIAL MEDIA</p>
            <div className="social-icons">
                <a href="#"><img src={facebook} alt="facebook-icon"/></a>
                <a href="#"><img src={instagram} alt="instagram-icon"/></a>
                <a href="#"><img src={twitter} alt="twitter-icon"/></a>
                <a href="#"><img src={whatsap} alt="whatsapp-icon"/></a>
                <a href="#"><img src={linkedin} alt="linkedin-icon"/></a>
                <a href="#"><img src={snapchat} alt="snapchat-icon"/></a>
            </div>
        </div>
    </section>
    )
}
export default Social