import { useState } from "react";

export default function Booking() {
  const [date, setDate] = useState("");
  const [boatType, setBoatType] = useState("1-2 man");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You booked a ${boatType} boat on ${date}!`);
  };

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Book Your Boat</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br/><br/>
        <label>
          Boat Type:
          <select value={boatType} onChange={(e) => setBoatType(e.target.value)}>
            <option value="1-2 man">1–2 man (£75)</option>
            <option value="2-4 man">2–4 man (£150)</option>
          </select>
        </label>
        <br/><br/>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
