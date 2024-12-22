import React from "react";

//STATELESS - PRESENTATIONAL - only render JSX
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={name}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Contact Name"
          />
        </label>
        <br />
        <label>
          <input
            value={phone}
            type="tel"
            name="phone"
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            onChange={(e) => setPhone(e.target.value)}
            aria-label="Contact Phone"
            placeholder="Contact Phone"
          />
        </label>
        <br />
        <label>
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Contact Email"
            aria-label="Contact Email"
          />
        </label>
        <br />
        <input type="submit" value="Add Contact" aria-label="Add Contact" />
      </form>
    </>
  );
};