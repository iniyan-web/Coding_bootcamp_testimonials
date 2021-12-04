import React from "react";
import prev from "../images/icon-prev.svg";
import next from "../images/icon-next.svg";
import data from "../Components/TestomonialData";
var i = 0;

const Testimonial = ({ review, name, designation, img, setGoTo }) => {
  const validateClick = (control) => {
    switch (control) {
      case "prev":
        if (i === 0) i = data.length - 1;
        else --i;
        setGoTo(i);
        break;

      case "next":
        if (i === data.length - 1) i = 0;
        else ++i;
        setGoTo(i);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <section className="testimonial">
        <div className="main-text">
          <p className="review">{review}</p>
          <div className="details">
            <h1 className="name">{name}</h1>
            <p className="designation">{designation}</p>
          </div>
        </div>
        <div className="main-img">
          <img className="person-img" src={img} alt={name} />
          <div className="controls">
            <img
              className="prev"
              src={prev}
              alt="Go to previous."
              onClick={(e) => validateClick(e.target.className)}
            />
            <img
              className="next"
              src={next}
              alt="Go to next."
              onClick={(e) => validateClick(e.target.className)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
