import { useState } from "react";
import { UserProfile } from "./UserProfile";

import "./App.css";
import { ContactForm } from "./ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProfile />
      <ContactForm />
    </>
  );
}

export default App;
