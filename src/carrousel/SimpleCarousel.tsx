import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./SimpleCarousel.css";
import styled from "styled-components";

const images = [
  "./monasteri/mon-1.jpg",
  "./monasteri/mon-2.jpg",
  "./monasteri/mon-3.jpg",
  "./monasteri/mon-4.jpg",
  "./monasteri/mon-5.jpg",
  "./monasteri/mon-6.jpg",
  "./monasteri/mon-7.jpg",
  "./monasteri/mon-8.jpg",
  "./monasteri/mon-9.jpg",
];

const CarouselImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  display: block;
  @media (max-width: 768px) {
    height: 30vh;
    background-position: center top; /* Horizontally and vertically center */
  }
`;

const CarouselStyle = styled.div`
  width: 50%;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

const SimpleCarousel = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
    arrows: false, // Disable arrows
    centerMode: false, // Make sure centerMode is not enabled (can cause issues with multiple active dots)
    focusOnSelect: true, // Ensure focus on selecting a dot
    dotsClass: "custom-dots",
  };

  return (
    <CarouselStyle>
      <Slider {...settings}>
        {images.map((img, index) => (
          <ImageContainer key={index}>
            <CarouselImage src={img} alt={`Slide ${index + 1}`} />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselStyle>
  );
};

export default SimpleCarousel;
