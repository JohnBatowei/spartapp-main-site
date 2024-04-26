// import vid from "../assets/SpartApp.mp4";
import { icons } from "../assets/icons/svgIcons";
import { useState } from "react";
import gif from '../assets/gif1.gif'
import gif1 from '../assets/gif2.gif'
import {
  Auxi,
  Bearing,
  Brake,
  Control,
  Engin,
  Fast,
  Hydraulic,
  Mech,
  Pneum,
  Struct,
  Suspen,
  Trans
} from "./ListItems";
import "./styles/hero.scss";
import Review from "./Review";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { BookmarkCheck, CardList, FileTextFill, PersonFill, Question, QuestionCircle } from "react-bootstrap-icons";
const HeroSection = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOver = item => {
    if (item) {
      setIsOn(true);
      setSelectedItem(item);
    } else {
      handleOut(false, null);
    }
  };

  const handleOut = (state1, state2) => {
    setIsOn(state1);
    // setSelectedItem(state2);
  };

  const handleLeave = () => {
    setIsOn(false);
    setSelectedItem(null);
  };

  const renderSelectedItem = () => {
    switch (selectedItem) {
      case "structural":
        return <Struct />;
      case "bearings":
        return <Bearing />;
      case "fastener":
        return <Fast />;
      case "mechanisms":
        return <Mech />;
      case "control":
        return <Control />;
      case "auxiliary":
        return <Auxi />;
      case "engine":
        return <Engin />;
      case "transmission":
        return <Trans />;
      case "suspension":
        return <Suspen />;
      case "brake":
        return <Brake />;
      case "pneumatic":
        return <Pneum />;
      case "hydraulic":
        return <Hydraulic />;
      default:
        return null;
    }
  };

  return (
    <div className="hero-section" onMouseLeave={handleLeave}>
           <div className="see-categories">See categories</div>
      <div className="left">

        <div className="ul">
         <div className="linktop link-parent">
         <Link to={''}
            onMouseEnter={() => handleOver("structural")}
            onMouseLeave={handleOut}
          >
            <img src={icons.structure} alt="" />
            Structural components
          </Link>

          <Link to={''}
            onMouseEnter={() => handleOver("bearings")}
            onMouseLeave={handleOut}
          >
            <img src={icons.bearings} alt="" />
            Bearings
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("fastener")}
            onMouseLeave={handleOut}
          >
            <img src={icons.fastener} alt="" />
            Fasteners
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("mechanisms")}
            onMouseLeave={handleOut}
          >
            <img src={icons.mech} alt="" />
            Mechanisms
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("control")}
            onMouseLeave={handleOut}
          >
            <img src={icons.control} alt="" />
            Control components
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("auxiliary")}
            onMouseLeave={handleOut}
          >
            <img src={icons.auxill} alt="" />
            Auxiliary components
          </Link>
         </div>


         <div className="linkdown link-parent">
         <Link to={''}
            onMouseEnter={() => handleOver("engine")}
            onMouseLeave={handleOut}
          >
            <img src={icons.engin} alt="" />
            Engine parts
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("transmission")}
            onMouseLeave={handleOut}
          >
            <img src={icons.transmission} alt="" />
            Transmission parts
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("suspension")}
            onMouseLeave={handleOut}
          >
            <img src={icons.suspension} alt="" /> Suspension parts
          </Link>
          <Link to={''} onMouseEnter={() => handleOver("brake")} onMouseLeave={handleOut}>
            <img src={icons.breakParts} alt="" /> Brake parts
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("pneumatic")}
            onMouseLeave={handleOut}
          >
            <img src={icons.pneuma} alt="" /> Pneumatic parts
          </Link>
          <Link to={''}
            onMouseEnter={() => handleOver("hydraulic")}
            onMouseLeave={handleOut}
          >
            <img src={icons.hydraulic} alt="" /> Hydraulic parts
          </Link>
         </div>

         {isOn &&
          <div className="products _mobile" onMouseLeave={handleLeave}>
            {renderSelectedItem()}
          </div>}
        </div>

       
        {/* {isOn &&
          <div className="products _mobile" onMouseLeave={handleLeave}>
            {renderSelectedItem()}
          </div>} */}
      </div>

      <div className="center">
        <Review />
        {/* <video src={vid} muted autoPlay loop /> */}
      </div>
      
      <div className="right">
        <div className="top">
          <img src={gif} alt="" />
        </div>
        <div className="bottom">
          <img src={gif1} alt="" />
          {/* <video src={vid} muted autoPlay loop /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
