import './commands'
// We could call this command to avoid launching quasar manually
// cy.exec('quasar dev -m pwa')


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  console.error('Unexpected error', err)
  return false
})
