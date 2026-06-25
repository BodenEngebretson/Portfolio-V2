import React, { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/contacts/")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Oops!", err));
  }, []);
  return (
    <div>
      <h1>Boden Engebretson</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
