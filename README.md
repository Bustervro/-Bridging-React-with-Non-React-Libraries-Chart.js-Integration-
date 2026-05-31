# -Bridging-React-with-Non-React-Libraries-Chart.js-Integration-
# Dynamic Poll Dashboard

## Overview

This project demonstrates how React's useEffect hook can be used to integrate a non-React library, Chart.js.

Users can vote for their favorite JavaScript framework. When a vote is submitted, React state updates and the Chart.js bar chart updates automatically.

## Technologies

* React
* Vite
* Chart.js
* useEffect
* useRef

## Features

* Real-time voting system
* Dynamic Chart.js bar chart
* React state synchronization
* Chart instance cleanup using destroy()

## How to Run

Install dependencies:

npm install

Install Chart.js:

npm install chart.js

Start the application:

npm run dev

## Test Cases

### Normal Cases

1. Vote for React

   * Expected: React bar increases by 1.

2. Vote for Vue

   * Expected: Vue bar increases by 1.

3. Vote for Angular

   * Expected: Angular bar increases by 1.

### Edge Cases

1. Multiple React votes

   * Expected: React count continues increasing correctly.

2. No votes cast

   * Expected: Chart displays all values as 0.

3. Rapid button clicking

   * Expected: Chart updates correctly without errors.

## Cleanup Analysis

The useEffect cleanup function calls destroy() on the Chart.js instance.

Without destroying the old chart, multiple chart instances could attach to the same canvas. This causes rendering issues, memory leaks, and Chart.js errors.

## Conclusion

This project demonstrates how React can safely work with external JavaScript libraries by using useEffect, useRef, and proper cleanup techniques.
