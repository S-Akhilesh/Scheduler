import React from "react";
import "./Slot.css";
const Slot = ({ setSlot }) => {
  const timings = [
    "10.00 AM",
    "10.30 AM",
    "10.00 AM",
    "11.00 AM",
    "11.30 AM",
    "12.00 PM",
    "12.30 PM",
    "1.00 PM",
    "1.30 PM",
    "2.00 PM",
    "2.30 PM",
    "3.00 PM",
    "3.30 PM",
    "4.00 PM",
    "4.30 PM",
  ];
  return (
    <div className="slot">
      <h3>Please select your preferred slot.</h3>
      <div className="slot__timings">
        {timings.map((time, id) => (
          <button
            key={id}
            className="slot__time"
            onClick={(e) => setSlot(e.target.value)}
            value={time}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slot;
