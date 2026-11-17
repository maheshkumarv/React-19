export const StyledForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Your Name"
      />
      <br />
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="Your Email"
        tabIndex="1"
      />
    </form>
  );
};
