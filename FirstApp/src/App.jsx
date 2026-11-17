import { useState } from "react";
import { UserProfile } from "./UserProfile";

import "./App.css";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProfile />
      <ContactForm />
      <StyledForm />
    </>
  );
}

export default App;
