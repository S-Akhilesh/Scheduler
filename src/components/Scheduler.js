import React, { useEffect, useState } from "react";
import "./Scheduler.css";
import Calendar from "react-calendar";
import Slot from "./Slot";
import Meet from "./Meet";
const Scheduler = () => {
  const [value, setValue] = useState("Training Room");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(new Date());
  const [meets, setMeets] = useState([]);

  useEffect(() => {
    var str = date.toString();
    var mt = str.match(/ [0-9][0-9]:[0-9][0-9]:[0-9][0-9] /);
    var res = str.replace(mt[0].toString(), ` ${slot} `);
    const dd = new Date(res);
    setDate(dd);
  }, [slot, meets]);

  const handleSubmit = () => {
    const meet = {
      organisedBy: `${name}`,
      meetingDesc: `${desc}`,
      Date: `${date}`,
      venue: `${value}`,
    };
    setMeets([...meets, meet]);
    console.log(meets);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="schedulerMain">
      <div className="scheduler">
        <div className="title">
          <h2>Meeting Room Booking.</h2>
        </div>
        <div className="form">
          <form>
            <label>
              Meeting Room
              <select value={value} onChange={handleChange}>
                <option value="Training Room">Training Room</option>
                <option value="Conference Room">Conference Room</option>
              </select>
            </label>
            <label>
              Name
              <input
                type="text"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Meeting Description
              <input
                type="text"
                value={desc}
                placeholder="Enter Meeting Description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
          </form>
          <div className="calender">
            <Calendar onChange={setDate} value={date} />
          </div>
          <Slot setSlot={setSlot} />
          <div className="btnBook">
            <button onClick={handleSubmit}>Book Slot</button>
          </div>
        </div>
      </div>
      <div className="bookedMeet">
        <h2>Alloted Meetings</h2>
        <div className="meetings">
          {meets.map((m, id) => (
            <Meet key={id} obj={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
