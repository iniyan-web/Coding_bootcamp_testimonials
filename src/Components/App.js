import React, { useState } from "react";
import Testimonial from "./Testimonial";
import testimonialData from "../Components/TestomonialData";

const App = () => {
  const data = testimonialData;
  const [goTo, setGoTo] = useState(0);
  return (
    <>
      <main>
        <Testimonial
          key={data[goTo].id}
          review={data[goTo].review}
          name={data[goTo].name}
          designation={data[goTo].designation}
          img={data[goTo].img.imgSrc}
          setGoTo={setGoTo}
        />
      </main>
    </>
  );
};

export default App;
