// Import the necessary libraries
import React, { useState } from "react";
import { useQuery } from "react-query";
//import { Appointment } from "./types";

// Define the component
const AppointmentBooking = () => {
  // Set up the state
  const [appointment, setAppointment] = useState(null);

  // Use Query to fetch the appointments
  const { data, isLoading } = useQuery("appointments", () => {
    return fetch("/api/appointments").then((response) => response.json());
  });

  // Handle the submit button click
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new appointment
    const newAppointment = {
      date: e.target.date.value,
      time: e.target.time.value,
      service: e.target.service.value,
    };

    // Save the appointment
    fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify(newAppointment),
    });

    // Reset the form
    setAppointment(null);
  };

  // Render the component
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Appointment Booking</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Date</label>
              <input type="date" name="date" value={appointment?.date} />
            </div>
            <div>
              <label>Time</label>
              <input type="time" name="time" value={appointment?.time} />
            </div>
            <div>
              <label>Service</label>
              <select name="service">
                {data?.map((appointment) => (
                  <option key={appointment.id} value={appointment.id}>
                    {appointment.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Book Appointment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;