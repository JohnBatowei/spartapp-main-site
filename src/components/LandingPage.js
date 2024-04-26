import Nav from "./Nav";
import "./styles/landingPage.scss";
import vid from "../assets/SpartApp.mp4";
import HeroSection from "./HeroSection";
import Product from "./Product";
import TopSellingProduct from "./TopSellingProduct";
import Toyota from "./Toyota";
import "./styles/auth-form-container.scss";
import SpartAppPrice from "./SpartAppPrice";
// import Review from "./Review";
// import axios from "axios";
import { Link } from "react-router-dom";
import OfficialStores from "./OfficialStores";
import AboutSpartApp from "./AboutSpartApp";
import Footer from "./Footer";
import FlashSales from "./FlashSales";
import Adverts from "./Adverts";
import { flashImage } from "./productImg";
import people from "./revData";
import React from "react";
import { useProduct } from '../components/auth/ProductContext';


const LandingPage = () => {
  const styles = {
    review: {
      width: "85%",
      marginTop: "1em",
      position: "relative",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "2em"
    },
    text: {
      color: "#000000",
      fontFamily: "Mulish",
      fontWeight: "600",
      fontSize: "20px",
      background: "lightblue",
      width: "100%",
      padding: "10px 0",
      textAlign: "center",
      marginBottom: "-0.5em",
      zIndex: "2"
    },
    toyota: {
      label: {
        color: "#000"
      },
      background: "whitesmoke",
      borderBottom: "1px solid rgba(128, 128, 128, 0.405)"
    },
    margin: {
      marginTop: "-1em"
    }
  };
  // const { user:admin } = useAuthContext();
const { dispatch } = useProduct();
// const [product, setProduct] = React.useState([]);
// const [regular, setRegular] = React.useState([]);
// const [random, setRandom] = React.useState([]);
// const [flashSales, setFlashSales] = React.useState([]);
// const [topDealsOneWay, setTopDealsOneWay] = React.useState([]);
// const [spartAppBestPrices, setSpartAppBestPrices] = React.useState([]);


React.useEffect(() => {
const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3800/spart-users/all-create-store-product", {
      method: 'GET',
    });

    if (!res.ok) {
      throw Error('Server not reachable');
    }

    const json = await res.json();
    // Check if json is an array and update state accordingly
    if (Array.isArray(json.regular) || Array.isArray(json.topDealsOneWay) || Array.isArray(json.products) || Array.isArray(json.flashSales) || Array.isArray(json.spartAppBestPrices) || Array.isArray(json.random)) {
      // Assuming you have these state variables defined using useState
      // setTopDealsOneWay(json.topDealsOneWay || []);
      // setProduct(json.products || []);
      // setFlashSales(json.flashSales || []);
      // setRandom(json.random || []);
      // setRegular(json.regular || []);
      // setSpartAppBestPrices(json.spartAppBestPrices || []);
      // localStorage.removeItem("json");
      dispatch({ type: 'SET_PRODUCTS', payload: json });
      // console.log(json)
    } else {
      console.error("API response is not an array:", json);
      // Update state with default values or empty arrays as needed
      // setTopDealsOneWay([]);
      // setProduct([]);
      // setFlashSales([]);
      // setRandom([]);
      // setRegular([]);
      // setSpartAppBestPrices([]);
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  fetchData();
}, [dispatch]);

// console.log(product,regular)

const dataFlash = flashImage;
const time = new Date();

  return (
   <>       
    <div className="landing-page">
      <div className="banner">
        <div className="video">
          <video src={vid} muted autoPlay loop />
          <div className="call">
            <span>call to order</span>
            <span>08079436049</span>
          </div>
        </div>
      </div>
      <Nav />

      <div className="main">
        <div className="ads">
          <Adverts images={people} title="call to order 08079436049" />
        </div>
        <HeroSection />
        <FlashSales
          // flashSales={flashSales}
          images={dataFlash}
          title="Flash Sales test1"
          link="See all"
          expTime={time}
        />
        <Product />
        <FlashSales
          // flashSales={flashSales}
          images={dataFlash}
          styles={styles.margin}
          title="Flash Sales test2"
          link="See all"
          expTime={time}
        />
        <TopSellingProduct title="Top Selling Product" />
        <Toyota label="Toyota official store" links="See all" />
        <SpartAppPrice />
        <TopSellingProduct title="Top Deals" />
        <Link to={""} styles={{ textDecoration: "none" }}>
          {/* <Review design={styles.review} text='Official Store' textStyle={styles.text}/> */}
        </Link>
        <Toyota
          label="Hot top deals"
          links="See all"
          design={styles.toyota}
          labels={styles.toyota.label}
        />
        <OfficialStores />
        <Product />
        <TopSellingProduct title="Get discount promo price now" />
        <AboutSpartApp />
      </div>
      <Footer />
    </div>
   </>
  );
};

export default LandingPage;
