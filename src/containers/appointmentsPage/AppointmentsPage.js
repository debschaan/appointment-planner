import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  //four local state variables, the current name, contact, date, and time entered into the form
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(name, contact, date, time);
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          name={name}
          contact={contact}
          date={date}
          time={time}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          setTitle={setName}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
      </>
  );
};