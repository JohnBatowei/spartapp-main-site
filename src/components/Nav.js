import { Link } from "react-router-dom";
import { Person,PersonFill, FileTextFill, CardList, BookmarkCheck,ChevronDown, Cart4, QuestionCircle, Question, Search, List   } from "react-bootstrap-icons";
import { useState } from "react";
import { useCart } from '../components/auth/CartContext';
import logo from "../assets/spartlogo.PNG";
import "./styles/nav.scss";
import Aside from "./Aside";



const Nav = () => {
  const [isHelp, setIsHelp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { state: cartState } = useCart();

  const count = cartState.cart.length
  // console.log('count : '+ count)

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsHelp(false)
  };
  
  const handleToggleHelp = () => {
    setIsHelp(!isHelp);
    setIsOpen(false)
  };
  
const styles = {
  color:'#033c49'
}

const [mobile,setMobile] = useState(false)
const handleMenuMobile = ()=>{
setMobile(true)
}

const getChildState = (state)=>{
  setMobile(state)
}
  return (
<div className='Nav'>
<div className="nav tops">
  <Link to={''}> <img src={logo} alt='Spart app logo' className="logo"/></Link>
  <div className="search" id="search">
    <div className="search-icon"><Search style={styles} /></div>
       <input type="text" placeholder="Search Spare Parts, Brands and cartegories"/><button>Search</button>
  </div>

 <div className='menu'>
 {/* <div className="dropdown" onMouseEnter={handleToggle} onMouseLeave={handleToggle}> */}
 <div className="dropdown" onClick={handleToggle}>
      <button className="dropdown-toggle" type="button">
       <Person style={{fontSize:'25px'}} /> My Account {isOpen ? <div className="arr0-true"><ChevronDown /></div>: <div className="arr0-false"><ChevronDown /></div>}
      </button>
      {isOpen && (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to={'/sign-up-in'} className="dropdown-item sign-in">
            <PersonFill className="icon" />
            Sign In
          </Link>
          <Link to={'/sign-up-in'} className="dropdown-item">
            <CardList className="icon" />
            Sign Up
          </Link>
          <Link to={''} className="dropdown-item">
            <FileTextFill className="icon" />
            Orders
          </Link>
          <Link to={''} className="dropdown-item">
            <BookmarkCheck className="icon" />
            Saved Items
          </Link>
        </div>
      )}
    </div>

  <div className="help" onClick={handleToggleHelp}>
      <button className="dropdown-toggle" type="button">
       <QuestionCircle style={{fontSize:'25px'}} /> Help {isHelp ? <div className="arr-true"><ChevronDown /></div>: <div className="arr-false"><ChevronDown /></div>}
      </button>
      {isHelp && (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to={''} className="dropdown-item sign-in">
            <Question className="icon" style={{fontSize:'22px'}} />
            Help centre
          </Link>
          <Link to={''} className="dropdown-item">
            <Question className="icon" style={{fontSize:'30px'}}/>
            Place & track orders
          </Link>
          <Link to={''} className="dropdown-item">
            <Question className="icon" style={{fontSize:'30px'}} />
            Orders cancellation
          </Link>
        </div>
      )}
    </div>



<div className="cart count">
  <Link to={'/payment-page'} className='cart'>
    <Cart4 style={{fontSize:'25px'}} /> 
       Cart <span>{count}</span>
    </Link>
</div>

 </div>



<div className="mobile">

<div className="dropdown" onClick={handleToggle}>
      <button className="dropdown-toggle" type="button">
       <Person style={{fontSize:'25px'}} /> My Account {isOpen ? <div className="arr0-true"><ChevronDown /></div>: <div className="arr0-false"><ChevronDown /></div>}
      </button>
      {isOpen && (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to={'/sign-up-in'} className="dropdown-item sign-in">
           <PersonFill className="icon" />
            Sign In
          </Link>
          <Link to={'/sign-up-in'} className="dropdown-item">
            <CardList className="icon" />
            Sign Up
          </Link>
          <Link to={''} className="dropdown-item">
            <FileTextFill className="icon" />
            Orders
          </Link>
          <Link to={''} className="dropdown-item">
            <BookmarkCheck className="icon" />
            Saved Items
          </Link>
        </div>
      )}
    </div>

  <div className="cart2 count">
  <Link to={'/payment-page'} className='cart2'>
    <Cart4 style={{fontSize:'25px'}} /> 
       Cart <span>{count}</span>
    </Link>
  </div>

</div>



<div className="list" onClick={handleMenuMobile}> <List /></div>
</div>



<div className="nav downs"> 
  <div className="search">
    <div className="search-icon"><Search style={styles} /></div>
       <input type="text" placeholder="Search Spare Parts, Brands and cartegories"/><button>Search</button>
  </div>
</div>

<aside className={`${mobile && 'view-mobile'}`}>
  <Aside states={mobile} func={getChildState}/>
</aside>
</div>
  );
};

export default Nav;
