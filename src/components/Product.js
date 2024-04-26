import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { images } from "./productImg";
import './styles/product.scss'
import { useProduct } from '../components/auth/ProductContext';

const Product = () => {

  const { state } = useProduct(); // Access the context state
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if random array exists in the context state
    if (state && state.random && state.random.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [state]);


// console.log(state)
  const temp = () => {
    if (state.random > 0) {
      return state.random.map((item, index) =>
        <div className="server-product" key={item.productId}>
          <Link
            to={`/product-Sale-Page/random/${item.storeId}/${item.productId}`}
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
                      &#x20A6; {item.amount.toLocaleString()}
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
    }else{
      // console.log("Rendering default products");
      return (<div className="product">
      <div className="first">
        <Link to={`/product/from-product-1`} className='prod'>
        <img src={images.prod1} alt="" />
       <span>Alternator</span>
        </Link>
        <Link to={`/product/from-product-2`}  className='prod'>
        <img src={images.prod2} alt="" />
        <span>Belt Tensioner</span>
        </Link>
        <Link to={`/product/from-product-3`}  className='prod'>
        <img src={images.prod3} alt="" />
        <span>brake pads</span>
        </Link>
        <Link to={`/product/from-product-4`} className='prod'>
        <img src={images.prod4} alt="" />
        <span>brake</span>
        </Link>
        <Link to={`/product/from-product-5`} className='prod'>
        <img src={images.prod5} alt="" />
        <span>cabin air filter</span>
        </Link>
        <Link to={`/product/from-product-6`} className='prod'>
        <img src={images.prod6} alt="" />
        <span>cv jonts</span>
        </Link>
      </div>

      
      <div className="second">
        <Link to={`/product/from-product-8`}  className='prod'>
        <img src={images.prod7} alt="" />
        <span>coolant</span>
        </Link>
        <Link to={`/product/from-product-9`} className='prod'>
        <img src={images.prod8} alt="" />
        <span>car staring</span>
        </Link>
        <Link to={`/product/from-product-10`} className='prod'>
        <img src={images.prod9} alt="" />
        <span>distributor cap</span>
        </Link>
        <Link to={`/product/from-product-11`} className='prod'>
        <img src={images.prod10} alt="" />
        <span>engine mounts</span>
        </Link>
        <Link to={`/product/from-product-12`} className='prod'>
        <img src={images.prod11} alt="" />
        <span>exhaust system</span>
        </Link>
        <Link to={`/product/from-product-13`} className='prod'>
        <img src={images.prod12} alt="" />
        <span>headlight assembly</span>
        </Link>
      </div>
    </div>)
    }
  };
  
  return (
      <div className="product2">{temp()}</div>
  );
};

export default Product;
