
// Import commands.js using ES2015 syntax:
import './commands';
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore React minified errors
  if (err.message.includes('Minified React error')) {
    return false;
  }
  return false; // or remove this line to only ignore React errors
});            