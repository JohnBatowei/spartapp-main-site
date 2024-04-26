import { Link } from "react-router-dom";
import { images } from "./productImg";
import './styles/top-selling-prod.scss'

const TopSellingProduct = (props) => {
    return ( 
        <div className="top-selling-product">
            <h1>{props.title}</h1>    
            <div className="top-products">
                <Link to={''} className="top-prod">
                    <img src={images.prod13} alt="" />
                    <span>Air filter</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;7999000</span>
                    </div>
                    <label>-77%</label>
                </Link>
                <Link to={''} className="top-prod">
                    <img src={images.prod14} alt="" />
                    <span>Engine</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8054500</span>
                    </div>
                    <label>-77%</label>
                </Link>
                <Link to={''} className="top-prod">
                    <img src={images.prod15} alt="" />
                    <span>fly wheel</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8000</span>
                    </div>
                    <label>-77%</label>
                </Link>
                <Link to={''} className="top-prod">
                    <img src={images.prod16} alt="" />
                    <span>gas cap</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;9000</span>
                    </div>
                    <label>-77%</label>
                </Link>
                <Link to={''} className="top-prod">
                    <img src={images.prod17} alt="" />
                    <span>hubcaps</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;8000</span>
                    </div>
                    <label>-77%</label>
                </Link>
                <Link to={''} className="top-prod">
                    <img src={images.prod18} alt="" />
                    <span>oil filter</span>
                    <div className="price">
                        <span className="real-price"> &#x20A6;5000</span>
                        <span className="_price"> &#x20A6;7000</span>
                    </div>
                    <label>-77%</label>
                </Link>
            </div>        
        </div>
     );
}
 
export default TopSellingProduct;