import './styles/review.scss';
import { useEffect, useState } from 'react';
import data from './revData';


const Review = (props) => {
  const [reviews] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 9000);

    return () => {
      clearInterval(slider);
    };
  }, []);

  

  return (
    <div className="review" style={props.design}>
    <h1 style={props.textStyle}>{props.text}</h1>
      <div className="review-main">
        {reviews.map((item, indexReviews) => {
          const { id, image } = item;
          let position = indexReviews === index ? 'activeSlide' : 'nextSlide';
          if (
            indexReviews === index - 1 ||
            (index === 0 && indexReviews === reviews.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} id={id} key={id}>
              <img src={image} alt="people reviews" />
            </article>
          );
        })}
      </div>
      
      <div className="notification-dots">
        {reviews.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`dot ${dotIndex === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Review;
