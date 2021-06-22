import React from "react";
import Counter from "../Counter/Counter.jsx";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId
});

test("should header renders with correct title", () => {
  const title = "My Counter";
  // const { getByTestId } = render(<Counter />);
  const titleElement = getByTestId("title");
  expect(titleElement.textContent).toBe(title);
});

test("should counters initialize with zero value", () => {
  const counter = "0";
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  expect(counterElement.textContent).toBe(counter);
});

test("should peace input be initialize with one value", () => {
  const peace = "1";
  // const { getByTestId } = render(<Counter />);
  const peaceElement = getByTestId("peace");
  expect(peaceElement.value).toBe(peace);
});

test("should add button renders with plus sign", () => {
  const add = "+";
  // const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-btn");
  expect(addButton.textContent).toBe(add);
});

test("should subtract button renders with hyphen sign", () => {
  const subtract = "-";
  // const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-btn");
  expect(subtractButton.textContent).toBe(subtract);
});

test("should able to change the peace", () => {
  const peaceStart = "1";
  const peaceEnd = "5";
  // const { getByTestId } = render(<Counter />);
  const peaceElement = getByTestId("peace");
  
  expect(peaceElement.value).toBe(peaceStart);
  fireEvent.change(peaceElement, {
    target: {value: peaceEnd},
  });
  expect(peaceElement.value).toBe(peaceEnd);
});

test('should adds peace to counter when click the plus add button', () => {
  const counterStart = "0"
  const counterEnd = "1"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const addButton = getByTestId("add-btn");
  
  expect(counterElement.textContent).toBe(counterStart);
  fireEvent.click(addButton)
  expect(counterElement.textContent).toBe(counterEnd);
});

test('should subtracts peace to counter when click the subtract add button', () => {
  const counterStart = "0"
  const counterEnd = "-1"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const subtractButton = getByTestId("subtract-btn");
  
  expect(counterElement.textContent).toBe(counterStart);
  fireEvent.click(subtractButton)
  expect(counterElement.textContent).toBe(counterEnd);
});

test('should change counter when change peace and click add button', () => {
  const counterStart = "0"
  const peace = "5"
  const counterEnd = "5"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const peaceElement = getByTestId("peace");
  const addButton = getByTestId("add-btn");

  
  expect(counterElement.textContent).toBe(counterStart);
  fireEvent.change(peaceElement, {
    target: {value: peace},
  });
  fireEvent.click(addButton)
  expect(counterElement.textContent).toBe(counterEnd);
});

test('should change counter when change peace and click subtract button', () => {
  const counterStart = "0"
  const peace = "5"
  const counterEnd = "-5"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const peaceElement = getByTestId("peace");
  const subtractButton = getByTestId("subtract-btn");

  
  expect(counterElement.textContent).toBe(counterStart);
  fireEvent.change(peaceElement, {
    target: {value: peace},
  });
  fireEvent.click(subtractButton)
  expect(counterElement.textContent).toBe(counterEnd);
});

test('should leads correct counter after adding and subtracting multiple times', () => {
  const counterStart = "0"
  const peace = "10"
  const counterEnd = "20"
  let addTimes = 4
  let subtractTimes = 2

  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const addButton = getByTestId("add-btn");
  const peaceElement = getByTestId("peace");
  const subtractButton = getByTestId("subtract-btn");

  expect(counterElement.textContent).toBe(counterStart);
  fireEvent.change(peaceElement, {
    target: {value: peace},
  });

  do {
    fireEvent.click(addButton)
    --addTimes
  } while (addTimes > 0);

  do {
    fireEvent.click(subtractButton)
    --subtractTimes
  } while (subtractTimes > 0);
  expect(counterElement.textContent).toBe(counterEnd);
});

test('counter should has green className when his value is under 100', () => {
  const classStart = "counter"
  const peace = "50"
  const classEnd = "green counter"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const peaceElement = getByTestId("peace");
  const addButton = getByTestId("add-btn");

  expect(counterElement.className).toBe(classStart);
  fireEvent.change(peaceElement, {
    target: {value: peace},
  });
  fireEvent.click(addButton)
  expect(counterElement.className).toBe(classStart);
  fireEvent.click(addButton)
  expect(counterElement.className).toBe(classEnd);
});

test('counter should has red className when his value is over -100', () => {
  const classStart = "counter"
  const peace = "50"
  const classEnd = "red counter"
  
  // const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const peaceElement = getByTestId("peace");
  const subtractButton = getByTestId("subtract-btn");

  expect(counterElement.className).toBe(classStart);
  fireEvent.change(peaceElement, {
    target: {value: peace},
  });
  fireEvent.click(subtractButton)
  expect(counterElement.className).toBe(classStart);
  fireEvent.click(subtractButton)
  expect(counterElement.className).toBe(classEnd);
});
