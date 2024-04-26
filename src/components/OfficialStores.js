import { Link } from "react-router-dom";
import { company } from "./productImg";
import './styles/official-social.scss'

const OfficialStores = () => {
    return ( 
        <>
        <div className="official-stores">
            <h1>Official Stores</h1>
            <div className="container">
                { company.map(function(item, index) {
                    if(index < 12){
                        return(      
                            <Link to={''} className="parent top-prod" key={item.id}>
                                <div className="absolute"><span>{item.name}</span></div>
                                <img src={item.companyName} alt="" />
                            </Link>
                        )
                    }else {
                      return null; // or return a different JSX element if needed
                    }
                })                
                }
            </div>

            {/* <div className="container">
                { company.map(function(item, index) {
                    if(index > 5 && index < 12){
                        return(      
                            <Link to={''} className="parent" key={item.id}>
                                <div className="absolute"><span>{item.name}</span></div>
                                <img src={item.companyName} alt="" />
                            </Link>
                        )
                    }else {
                      return null; // or return a different JSX element if needed
                    }
                })                
                }
            </div> */}
        </div>
    </>
    );
}
 
export default OfficialStores;
