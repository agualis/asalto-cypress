/// <reference types="Cypress" />
import { getByDataTestId } from '../../../common/helpers'

context('As a citizen', () => {

  before(()=> cy.loginWithSuperAdminUser())

  beforeEach(() => {
    cy.visit('/list')
  })

  it('I can see the list of nearest artworks', () => {
    getByDataTestId('list-item').should('have.length', 3)
  })

  it('I can see the list of nearest artworks after a seed', () => {
    cy.request('reset-db-hook')
    getByDataTestId('list-item').should('have.length', 3)
  })
})
