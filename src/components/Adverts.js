import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/advert.scss'
// import { ArrowRight, LightningFill } from "react-bootstrap-icons"

const Advert = props => {
  const { images, title } = props;
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      if (images.length > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [images]
  );

  console.log(images.length);
  return (
    <div className="adverts">
      <div className="group">
        <h1>
          {title}
        </h1>
      </div>
      <div className="parent-sales">
        {show &&
          images.map((item, index) => {
            return (
              <div className="flash-sales" key={item.id}>
                <Link to={""}>
                  <img src={item.image} alt={item.name} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Advert;
