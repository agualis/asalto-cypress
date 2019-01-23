/// <reference types="Cypress" />

import { getByDataTestId } from '../../../common/helpers'

context('As superadmin', () => {
  beforeEach(() => {
    cy.visit('/superlogin')
  })

  it('I can reset the database', () => {
    cy.loginWithSuperAdminUser()
    cy.visit('/reset-db')
    getByDataTestId('reset-db').click()
    cy.contains('RESET SUCCESS')
  })
})
