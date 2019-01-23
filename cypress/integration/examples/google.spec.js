/// <reference types="Cypress" />

import { urlContains } from '../../common/helpers'

const search = (searchTerm) =>  cy.get('.gLFyf').type(searchTerm).type('{enter}')
const openFirst = () =>  cy.get('.bkWMgd').first().get('h3').first().click()
const assertSearchOpened = ()=> urlContains('http://bilbostack.com/')

context('When using Google search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.es')
  })

  it('developar can find and open bilbostack content', () => {
    search('bilbostack')
    openFirst()
    assertSearchOpened()
  })

})
