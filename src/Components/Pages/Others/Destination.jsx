import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Destination = () => {
  const allDestination = useLoaderData([]);
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  // console.log(allDestination.tourist_spots);
  const filteredDestination = allDestination.tourist_spots.find(
    (sDestination) => sDestination.id === id
  );
  const handleBooking = (name) => {
    console.log("booked", name);
    let bookCart = {};
    const prevBook = JSON.parse(localStorage.getItem("booking-cart"));
    if (prevBook) {
      bookCart = prevBook;
    }
    const quantity = bookCart[name];
    if (quantity) {
      const newQuantity = quantity + 1;
      bookCart[name] = newQuantity;
    } else {
      bookCart[name] = 1;
    }
    // console.log(quantity);

    localStorage.setItem("booking-cart", JSON.stringify(bookCart));
  };
  return (
    <div>
      {filteredDestination && (
        <div className="grid md:grid-cols-2 items-center my-12  mx-12">
          <div className="md:p-12 text-white ">
            <h1 className="text-7xl font-semibold my-8">
              {filteredDestination.name}
            </h1>
            <p className="text-sm">{filteredDestination.description}</p>
          </div>
          <div className="bg-white p-4 md:w-3/5 mx-auto">
            <label htmlFor="from">
              <span className="text-sm text-slate-500"> From:</span>
              <input
                type="text"
                placeholder="From"
                className="input input-bordered w-full bg-slate-50"
              />
            </label>
            <label htmlFor="from">
              <span className="text-sm text-slate-500"> To:</span>
              <input
                type="text"
                placeholder="Destination"
                className="input input-bordered w-full bg-slate-50"
              />
            </label>

            <div className="flex gap-2 my-3">
              <label htmlFor="from">
                <span className="text-sm text-slate-500"> Start Date: </span>
                <DatePicker
                  className=" border p-2 rounded w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </label>
              <label htmlFor="to">
                <span className=" text-sm text-slate-500"> End Date: </span>
                <DatePicker
                  className=" border p-2 rounded w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </label>
            </div>
            <button
              onClick={() => handleBooking(filteredDestination.id)}
              className="btn btn-warning w-full my-3"
            >
              Start Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
