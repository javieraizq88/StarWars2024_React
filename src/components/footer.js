import React from "react";
import { ImgCarousel, CarouselText, CarouselTextDisabled } from "../styled";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="jc-c">
      <Carousel className="mt-5">
        {/* characters */}
        <Carousel.Item role="button">
          <Link to={`/characters`}>
            <ImgCarousel
              className="d-block"
              src="https://images.reporteindigo.com/wp-content/uploads/2023/04/personajes-star-wars.jpg"
              alt=""
            />
            <Carousel.Caption className="jc-c">
              <CarouselText>Go to Characters</CarouselText>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        {/* films */}
        <Carousel.Item role="button">
          <Link to={`/films`}>
            <ImgCarousel
              className="d-block"
              src="https://images4.alphacoders.com/814/81446.jpg"
              alt=""
            />
            <Carousel.Caption className="jc-c">
              <CarouselText>Go to Films</CarouselText>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        {/* planets */}
        <Carousel.Item>
          <ImgCarousel
            className="d-block"
            src="https://png.pngtree.com/background/20230410/original/pngtree-game-star-wars-background-picture-image_2379588.jpg"
            alt="" />
          <Carousel.Caption className="jc-c">
            <CarouselTextDisabled disabled>Planets comming soon</CarouselTextDisabled>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Vehicles */}
        <Carousel.Item>
          <ImgCarousel
            className="d-block"
            src="https://e1.pxfuel.com/desktop-wallpaper/802/797/desktop-wallpaper-star-wars-star-wars-ships-pinterest-star-wars-imperial-vehicles.jpg"
            alt="" />
          <Carousel.Caption className="jc-c">
            <CarouselTextDisabled disabled>Vehicles comming soon</CarouselTextDisabled>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )

}

export default Footer