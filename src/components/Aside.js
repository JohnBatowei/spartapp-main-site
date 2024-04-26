import {
  BookmarkCheck,
  CardList,
  FileTextFill,
  PersonFill,
  Question,
  XCircle,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { icons } from "../assets/icons/svgIcons";
import './styles/aside.scss'
import { useState } from "react";

const Aside = (props) => {

  const {states,func} = props

  const [close,setClose] = useState(states)
  const handleState = ()=>{
   func(setClose(!close))
  }


  // console.log(states)
  return (
    <div className="ul-mobile">

      
        <div className="menu">
      
            <div className="dropdown-menu">
              <Link to={""} className="dropdown-item sign-in">
                <PersonFill className="icon" />
                Sign In
              </Link>
              <Link to={""} className="dropdown-item">
                <CardList className="icon" />
                Sign Up
              </Link>
              <Link to={""} className="dropdown-item">
                <FileTextFill className="icon" />
                Orders
              </Link>
              <Link to={""} className="dropdown-item">
                <BookmarkCheck className="icon" />
                Saved Items
              </Link>
            </div>
        

            <div className="dropdown-menu">
              <Link to={""} className="dropdown-item sign-in">
                <Question className="icon" style={{ fontSize: "25px" }} />
                Help centre
              </Link>
              <Link to={""} className="dropdown-item">
                <Question className="icon" style={{ fontSize: "25px" }} />
                Place & track orders
              </Link>
              <Link to={""} className="dropdown-item">
                <Question className="icon" style={{ fontSize: "25px" }} />
                Orders cancellation
              </Link>
            </div>
        </div>
      

      <div className="link-parent">
        <Link to={""}>
          <img src={icons.structure} alt="" />
          Structural components
        </Link>

        <Link to={""}>
          <img src={icons.bearings} alt="" />
          Bearings
        </Link>
        <Link to={""}>
          <img src={icons.fastener} alt="" />
          Fasteners
        </Link>
        <Link to={""}>
          <img src={icons.mech} alt="" />
          Mechanisms
        </Link>
        <Link to={""}>
          <img src={icons.control} alt="" />
          Control components
        </Link>
        <Link to={""}>
          <img src={icons.auxill} alt="" />
          Auxiliary components
        </Link>
      </div>

      <div className="link-parent">
        <Link to={""}>
          <img src={icons.engin} alt="" />
          Engine parts
        </Link>
        <Link to={""}>
          <img src={icons.transmission} alt="" />
          Transmission parts
        </Link>
        <Link to={""}>
          <img src={icons.suspension} alt="" />
          Suspension parts
        </Link>
        <Link to={""}>
          <img src={icons.breakParts} alt="" />
          Brake parts
        </Link>
        <Link to={""}>
          <img src={icons.pneuma} alt="" />
          Pneumatic parts
        </Link>
        <Link to={""}>
          <img src={icons.hydraulic} alt="" />
          Hydraulic parts
        </Link>
      </div>

      <div className='councel' onClick={handleState}><XCircle /></div>
    </div>
  );
};

export default Aside;
