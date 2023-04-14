"use strict";

// 1. isHometown
function isHometown(town) {
  return town === "San Francisco";
}

// 2. getFullName
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {
  let subtotal = basePrice * (1 + tax);
  let fee = 0;

  switch (state) {
    case "CA":
      fee = 0.03 * subtotal;
      break;
    case "PA":
      fee = 2;
      break;
    case "MA":
      basePrice <= 100 ? (fee = 1) : (fee = 3);
      break;
  }

  return subtotal + fee;
}
