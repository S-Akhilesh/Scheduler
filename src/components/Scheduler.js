import React, { useEffect, useState } from "react";
import "./Scheduler.css";
import Calendar from "react-calendar";
import Slot from "./Slot";
import { gapi } from "gapi-script";
import Meet from "./Meet";
import { API_KEY, CLIENT_ID } from "../config";

const Scheduler = () => {
  const [value, setValue] = useState("Training Room");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(new Date());
  const [meets, setMeets] = useState([]);

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const setter = (dd) => setDate(dd);

  useEffect(() => {
    var str = date.toString();
    var mt = str.match(/ [0-9][0-9]:[0-9][0-9]:[0-9][0-9] /);
    var res = str.replace(mt[0].toString(), ` ${slot} `);
    const dd = new Date(res);
    setter(dd);
  }, [slot, meets]);

  // const handleSubmit = () => {
  //   const meet = {
  //     organisedBy: `${name}`,
  //     meetingDesc: `${desc}`,
  //     Date: `${date}`,
  //     venue: `${value}`,
  //   };

  //   // setMeets([...meets, meet]);
  //   console.log(meets);
  // };

  const handleSubmit = () => {
    // setLoading(true);
    const event = {
      title: name,
      summary: value,
      location: "Google Meet",
      description: desc,
      start: {
        dateTime: date,
        timeZone: "Asia/Calcutta",
      },
      end: {
        dateTime: date,
        timeZone: "Asia/Calcutta",
      },
      recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
      attendees: [
        { email: "lpage@example.com" },
        { email: "sbrin@example.com" },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calendar", "v3");
      Promise.resolve(gapi.auth2.getAuthInstance().signIn());
      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      request.execute((event) => {
        // setEventLink(event.htmlLink);
        window.open(event.htmlLink);
      });
    });
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
