import React, { useEffect, useState } from "react";
import SideBarClient from "../components/SideBarClient";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://brotein-bistro-01am.onrender.com/api/events/getAllevents")
      .then((response) => response.json())
      .then((data) => setEvents(data.reverse()));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SideBarClient />
      <div className="pt-20 p-2 w-full border shadow-sm rounded-2xl flex flex-col justify-center items-center">
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold mb-2 capitalize">Our next event</h1>
          <p className="text-xl mb-4 capitalize">
            Stay tuned for a taste of what’s to come!
          </p>
        </div>
        {events.map((event) => (
          <div
            key={event._id}
            className="max-w-sm rounded-xl overflow-hidden  m-2 bg-[#EFFCEF] border shadow-sm"
          >
            <img
              className="w-full"
              src={event.eventPoster}
              alt={event.eventName}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.eventName}</div>
              <p className="text-gray-700 text-base">{event.eventDate}</p>
              <p className="text-gray-700 text-base">{event.eventLocation}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Featured
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
