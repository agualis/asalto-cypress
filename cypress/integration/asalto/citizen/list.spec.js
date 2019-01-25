/// <reference types="Cypress" />
import { getByDataTestId } from '../../../common/helpers'

const assertListHasThreeElements = () => getByDataTestId('list-item').should('have.length', 3)


context('As a citizen', () => {

  before(()=> cy.loginWithSuperAdminUser())

  beforeEach(() => {
    cy.visit('/list')
  })

  it('I can see the list of nearest artworks', () => {
    // Huele a canela, pero es veneno...🙊
    assertListHasThreeElements()
  })
})
