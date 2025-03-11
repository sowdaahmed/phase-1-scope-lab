// Write your solution in this file!
// 1. Declare customerName in the global scope
var customerName = "bob";

// 2. Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Overwriting the existing variable
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function to attempt modifying leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else"; // Error: Assignment to constant variable
}

