import { Link } from "react-router-dom";
import { images } from "./productImg";
import { ArrowRight } from "react-bootstrap-icons";
import './styles/toyota.scss'

const Toyota = (props) => {
    let {label, links, design,labels} = props
    return ( 
        <div className="toyota">
            <div className="top" style={design}><h1 style={labels}>{label}</h1> <Link to={''} style={labels}>{links} <ArrowRight /></Link> </div>
    
            <div className="toyota-store">
            
                <Link to={''} className="prod">
                    <img src={images.prod19} alt="" />
                    <span>radiator</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;7999000</span>
                    </div>
                </Link>
                <Link to={''} className="prod">
                    <img src={images.prod20} alt="" />
                    <span>fuel filter</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8054500</span>
                    </div>
                </Link>
                <Link to={''} className="prod">
                    <img src={images.prod21} alt="" />
                    <span>spark plug wires</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8000</span>
                    </div>
                </Link>
                <Link to={''} className="prod">
                    <img src={images.prod22} alt="" />
                    <span>turn signal assembly</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;9000</span>
                    </div>
                </Link>
                <Link to={''} className="prod">
                    <img src={images.prod25} alt="" />
                    <span>spark plug</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8000</span>
                    </div>
                </Link>
                <Link to={''} className="prod">
                    <img src={images.prod28} alt="" />
                    <span>transmission</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;7000</span>
                    </div>
                </Link>
        
            </div>
        </div>
     );
}
 
export default Toyota;