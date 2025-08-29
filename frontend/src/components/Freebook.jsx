import React from "react";
import List from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const filterdata = List.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    //centerMode: true,         // ✅ Center active slide
    centerPadding: "0px",     // ✅ No side padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-2xl">Free Offered Courses</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adi?
        </p>
      </div>

      {/* Slider Section */}
      <div className="flex justify-center">
        <div className="w-full">
          <Slider {...settings}>
            {filterdata.map((item) => (
              <div key={item.id} className="px-2">  {/* ✅ Reduced card spacing */}
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Freebook;
