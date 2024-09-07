import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import '../styles/Banner.css'

export default function Banner(){
    return(
        <div className="banner">
            <img className="banner-img" src={banner1} alt="" />
            <div className="text">Torque Store</div>
            <img className="banner-img" src={banner2} alt="" />
        </div>
    )
}