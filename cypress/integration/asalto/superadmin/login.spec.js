/// <reference types="Cypress" />

import { SUPERADMIN_PASSWORD, SUPERADMIN_USER } from '../../../common/globals'
import { getByDataTestId, urlIs } from '../../../common/helpers'

const assertSuperadminLoggedIn = () => {
    const OBEY_IMG_SRC = 'img/obey-face.jpg'
    // SELECTOR BY stack overflow jquery
    cy.get(`img[src='${OBEY_IMG_SRC}'`)
    // SELECTOR BY chrome devtools
    cy.get('div.q-item-side.q-item-section.q-item-side-left > div > img').should('have.attr', 'src', OBEY_IMG_SRC)
    // SELECTOR BY gualison
    getByDataTestId('superadmin-avatar').should('have.attr', 'src', OBEY_IMG_SRC)
}

context('As superadmin', () => {
  beforeEach(() => {
    cy.visit('/superlogin')
  })

  it('I can login', () => {
    getByDataTestId('superlogin-email').type(SUPERADMIN_USER)
    getByDataTestId('superlogin-password').type(SUPERADMIN_PASSWORD)
    getByDataTestId('superlogin-submit').click()
    urlIs('http://localhost:8080/#/')
  })

  it('I can see the giant image after login', () => {
    getByDataTestId('superlogin-email').type(SUPERADMIN_USER)
    getByDataTestId('superlogin-password').type(SUPERADMIN_PASSWORD)
    getByDataTestId('superlogin-submit').click()
    urlIs('http://localhost:8080/#/')
    assertSuperadminLoggedIn()
  })
})
