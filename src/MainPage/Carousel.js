import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselImages = () => {
  return (
    <section className="slider">
      <div id="slide">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503577/H_M_iwwozr.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503627/US_dihxc3.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503648/w_odwc0j.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dt2q0lr2m/image/upload/v1625503606/puma_jfiinm.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselImages;
