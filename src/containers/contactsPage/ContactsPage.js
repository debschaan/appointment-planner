import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      //clear form
      setName('');
      setPhone('');
      setEmail('');
    }
    else {
      alert('The name is a duplicate!');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact
          {duplicate ? " - Already exists" : ""}
        </h2>
        <ContactForm
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          setName={setName}
          setPhone={setPhone}
          name={name}
          phone={phone}
          email={email}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
