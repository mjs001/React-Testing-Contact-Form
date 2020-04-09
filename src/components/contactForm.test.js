import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
test("inputs are showing", () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/firstName/i);
  getByLabelText(/lastName/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});
