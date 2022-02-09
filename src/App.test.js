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




test('button turns blue when clicked', () => {

});