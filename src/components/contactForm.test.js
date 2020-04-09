import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
test("inputs are showing", () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/first Name/i);
  getByLabelText(/last Name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test("form submits and prints out the info", () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  const FirstNameInput = getByPlaceholderText(/bill/i);
  const LastNameInput = getByPlaceholderText(/luo/i);

  fireEvent.change(FirstNameInput, { target: { value: "Mel" } });
  fireEvent.change(LastNameInput, { target: { value: "Gibson" } });

  expect(FirstNameInput.value).toBe("Mel");
  expect(LastNameInput.value).toBe("Gibson");
});
