import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Home = () => {
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => setDestination(data.tourist_spots));
  }, []);
  // console.log(destination);
  return (
    <div className=" items-center text-white my-12">
      <div className="mx-12">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {destination.map((sDestination) => (
            <SwiperSlide key={sDestination.id}>
              <div className="grid grid-cols-2 items-center">
                <div className="md:p-12">
                  <h1 className="text-7xl font-semibold my-8">
                    {sDestination.name}
                  </h1>
                  <p className="text-sm">{sDestination.description}</p>
                  <div className="text-start">
                    <Link to={`/destination/${sDestination.id}`}>
                      <button className="btn  btn-warning my-8">
                        Booking <FaArrowRight></FaArrowRight>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="w-full border rounded mx-auto h-72"
                    src={sDestination.img_url}
                    alt=""
                  />
                  <h3 className="text-4xl absolute bottom-8 left-6 font-bold  shadow-lg">
                    {sDestination.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
