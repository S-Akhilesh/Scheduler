import React from "react";
import "./Slot.css";
const Slot = ({ setSlot, selected, setSelected }) => {
  const timings = [
    { time: "10.00 AM", value: "10:00:00" },
    { time: "10.30 AM", value: "10:30:00" },
    { time: "11.00 AM", value: "11:00:00" },
    { time: "11.30 AM", value: "11:30:00" },
    { time: "12.00 PM", value: "12:00:00" },
    { time: "12.30 PM", value: "12:30:00" },
    { time: "1.00 PM", value: "13:00:00" },
    { time: "1.30 PM", value: "13:30:00" },
    { time: "2.00 PM", value: "14:00:00" },
    { time: "2.30 PM", value: "14:30:00" },
    { time: "3.00 PM", value: "15:00:00" },
    { time: "3.30 PM", value: "15:30:00" },
    { time: "4.00 PM", value: "16:00:00" },
    { time: "4.30 PM", value: "16:30:00" },
    { time: "5.00 PM", value: "17:00:00" },
    { time: "5.30 PM", value: "17:30:00" },
    { time: "6.00 PM", value: "18:00:00" },
  ];

  return (
    <div className="slot">
      <h3>Please select your preferred slot.</h3>
      <div className="slot__timings">
        {timings.map((t, id) => (
          <button
            key={id}
            className={selected === id ? "slot__time active" : "slot__time"}
            onClick={() => {
              setSlot(t.value);
              setSelected(id);
            }}
            value={t.time}
          >
            {t.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slot;
