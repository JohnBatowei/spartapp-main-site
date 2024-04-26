import { Link } from "react-router-dom";
import { useState } from 'react';
import spartApp from './spartPriceData'
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import './styles/spart-app-price.scss'

const SpartAppPrice = () => {
  const [spart] = useState(spartApp);
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + spart.length) % spart.length);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % spart.length);
  };

  const displayedArticles = spart.slice(index, index + 6);

  const isPreviousDisabled = index === 0;
  const isNextDisabled = index + 6 >= spart.length;

  return (
    <div className="spart-app-price">
      <div className="top">
        <h1>SpartApp Best Prices </h1>
      </div>
      <div className="spart-app-prod">
        {displayedArticles.map((item, indexReviews) => {
          const { image, name, percentage, price, discounted } = item;
          let position = indexReviews === index ? 'activeSlide' : 'nextSlide';
          if (
            indexReviews === index - 1 ||
            (index === 0 && indexReviews === spart.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} id={indexReviews} key={indexReviews}>
              <Link to={''}>
                <img src={image} alt={name} />
                <span>{name}</span>
                <div className="price">
                  <span className="real-price">&#x20A6;{price}</span>
                  <span className="_price">&#x20A6;{discounted}</span>
                </div>
                <label>-{percentage}%</label>
              </Link>
            </article>
          );
        })}
      </div>
      <div className="slider-buttons">
        <button className="prev-button btn" onClick={goToPrevious} disabled={isPreviousDisabled}>
          <ChevronLeft style={{ fontSize: '26px' }} />
        </button>
        <button className="next-button btn" onClick={goToNext} disabled={isNextDisabled}>
          <ChevronRight style={{ fontSize: '26px' }} />
        </button>
      </div>
      {/* <div className="notification-dots">
        {spart.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${dotIndex === index ? 'active' : ''}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default SpartAppPrice;
