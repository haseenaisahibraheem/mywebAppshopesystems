import "./MainSection.css";

import Products from "./Products";
import CarouselImages from "./Carousel";

const MainSection = () => {
  return (
    <section>
      <CarouselImages />
      <section id="features">
        <div className="icon_container">
          <div className="icon_image">
            <img
              src="https://shoplane.netlify.app/img/icon1.png"
              alt="icon_images"
            />
          </div>
          <h4>Free Delivery</h4>
        </div>
        <div className="icon_container">
          <div className="icon_image">
            <img
              src="https://shoplane.netlify.app/img/icon2.png"
              alt="icon_images"
            />
          </div>
          <h4>Money Back Gurantee</h4>
        </div>
        <div className="icon_container">
          <div className="icon_image">
            <img
              src="https://shoplane.netlify.app/img/icon3.png"
              alt="icon_images"
            />
          </div>
          <h4>Always Support</h4>
        </div>
        <div className="icon_container">
          <div className="icon_image">
            <img
              src="https://shoplane.netlify.app/img/icon4.png"
              alt="icon_images"
            />
          </div>
          <h4>Secure Payment</h4>
        </div>
      </section>
      <Products />
    </section>
  );
};

export default MainSection;
