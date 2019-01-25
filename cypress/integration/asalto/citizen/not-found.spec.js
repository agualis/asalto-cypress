/// <reference types="Cypress" />
import { urlContains } from '../../../common/helpers'

const goBack = () => cy.get('button').click()

context('As a user', () => {

  it('I see a 404 page when I try to open an invalid page', () => {
    cy.visit('/wtf/foo/bar')
    goBack()
    urlContains('/')
  })
})
