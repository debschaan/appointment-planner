import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker.js';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Appointment Name"
            aria-label="Appointment Name"
            required
          />
        </label>
        <br />
        <label>
          <ContactPicker
            name="contact"
            value={contact}
            contacts={contactNames}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            value={date}
            type="date"
            min={getTodayString()}
            name="date"
            onChange={(e) => setDate(e.target.value)}
            aria-label="Date picker"
            required
          />
        </label>
        <br />
        <label>
          <input
            value={time}
            type="time"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            aria-label="Pick a time"
          />
        </label>

        <input aria-label="Add Appointment" value="Add Appointment" type="submit" />
      </form>
    </>
  );
};