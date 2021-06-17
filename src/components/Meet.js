import React from "react";
import "./Meet.css";
const Meet = ({ obj }) => {
  return (
    <div className="meet">
      <div className="card">
        <p>
          Organised By: <h6>{obj.organisedBy}</h6>{" "}
        </p>
        <p>
          Meeting Description: <h6>{obj.meetingDesc}</h6>
        </p>
        <p>
          Date: <h6> {obj.Date}</h6>{" "}
        </p>
        <p>
          Venue: <h6>{obj.venue}</h6>{" "}
        </p>
      </div>
    </div>
  );
};

export default Meet;
