import React, { useEffect, useState } from "react";
import "./Scheduler.css";
import Calendar from "react-calendar";
import Slot from "./Slot";
const Scheduler = () => {
  const [value, setValue] = useState("trainingRoom");
  const [slot, setSlot] = useState("");
  useEffect(() => {
    console.log(slot);
  }, [slot]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="scheduler">
      <div className="title">
        <h2>Meeting Room Booking.</h2>
      </div>
      <div className="form">
        <form>
          <label>
            Meeting Room
            <select value={value} onChange={handleChange}>
              <option value="trainingRoom">Training Room</option>
              <option value="conferenceRoom">Conference Room</option>
            </select>
          </label>
          <label>
            Name
            <input type="text" placeholder="Enter Your Name" />
          </label>
          <label>
            Meeting Description
            <input type="text" placeholder="Enter Meeting Description" />
          </label>
        </form>
        <div className="calender">
          <Calendar />
        </div>
        <Slot setSlot={setSlot} />
      </div>
    </div>
  );
};

export default Scheduler;
