import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  //Find an element with role="button" and the text "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" })

  //Expect the background color of the button to be red
  expect(colorButton).toHaveStyle(`
    background-color: red;
  `)

  //Click the button
  fireEvent.click(colorButton)

  //Expect the background color of the button to be blue
  expect(colorButton).toHaveStyle(`
    background-color: blue;
  `)

  //Expect the text of the button to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to red")

});


test('Initial conditions', () => {
  render(<App />);

  //Check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toBeEnabled();

  //Check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked();
})


test('checkbox disables button on first click and enables in second click', () => {
  render(<App />);

  // Get button and checkbox from the DOM
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');
  
  //Disable the button on checkbox click
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();


  //Enable the button on second click
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled()

})