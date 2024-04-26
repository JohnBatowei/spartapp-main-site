import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/flash-sales-temp.scss';
import { ArrowRight, LightningFill } from "react-bootstrap-icons";
import { useProduct } from '../components/auth/ProductContext';


const FlashSales = (props) => {

  const { state } = useProduct(); // Access the context state
  const { images, link, title, styles } = props;
  const [show, setShow] = useState(false);
  const [storeDisc, setStoreDisc] = useState([]);

// console.log(storeDisc)

  useEffect(() => {
    // Check if flashSales array exists in the context state
    if (state && state.flashSales && state.flashSales.length > 0) {
      // setShow(true);
      // console.log(state.flashSales.storeDescriptionName)
      const uniqueStoreDisc = Array.from(new Set(state.flashSales.map(item => item.storeDescriptionName)));
setStoreDisc(uniqueStoreDisc);
    } else {
      setShow(false);
    }
  }, [state]);
  // console.log(state.flashSales)
  // const ti = ''
  const temp = () => {
    if (state.flashSales && state.flashSales.length > 0) {
      return state.flashSales.map((item, index) =>
      
        <div className="flash-sales" key={item.productId}>
          <Link
            to={`/product-Sale-Page/flashSales/${item.storeId}/${item.productId}`}
          >
            
            <img src={item.image} alt={item.productName} />
            <span>
              {item.productName}
            </span>
            <div className="price">
              {item.discounted === true
                ? <div className="disc">
                    <span
                      className="_price"
                      style={{
                        textDecoration: "line-through"
                      }}
                    >
                      {" "}&#x20A6; {item.amount.toLocaleString()}
                    </span>
                    <span className="_price a">
                      {" "}<span className="main-price">
                        &#x20A6;
                      </span>{" "}
                      {item.discountedAmount.toLocaleString()}
                    </span>
                  </div>
                : <div className="disc">
                    <span className="_price">
                      {" "}<span className="main-price">
                        {" "}&#x20A6;{" "}
                      </span>{" "}
                      {item.amount.toLocaleString()}
                    </span>
                  </div>}
            </div>
            <label>
              -{item.discountPercentage}%
            </label>
          </Link>
        </div>
      );
    } else {
      return images.map((item, index) => (
        <div className="flash-sales" key={item.id}>
          <Link to={''}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <div className="price">
              <span className="real-price">&#x20A6;{item.price}</span>
              {/* { <span className="_price">&#x20A6;{item.disct}</span>} */}
            </div>
            <label>-{item.disct}%</label>
          </Link>
        </div>
      ));
    }
  };

//   console.log(flashSales)

  return (
    <div className="flash-sales-temp" style={styles}>
      <div className="group">
        <h1>
        {storeDisc.length > 0 ? storeDisc.map((storeName, index) => ( <span key={index} style={{fontFamily:'Mulish',textTransform:'capitalize'}}> {storeName} </span>)): title } <span className="flash-icon"><LightningFill /></span>
        </h1>
        <div className='time'></div>
        <Link to={''}>{link}<ArrowRight /></Link>
      </div>
      <div className="parent-sales">{temp()}</div>
    </div>
  );
};

export default FlashSales;
