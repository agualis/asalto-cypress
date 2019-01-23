/// <reference types="Cypress" />

import { changeFirstRangeInput, clickButton, dataTestSelector, ENTER, fillInput, fillTextArea, getByDataTestId, getFirstRangeInput, isVisible } from '../../../common/helpers'

context('As an anonymous citizen', () => {
  beforeEach(() => {
     cy.visit('/')
  })

  it('I see a spinner before the works are loaded', () => {
     getByDataTestId('works-loading-spinner').should('be.visible')
  })

  it('I see a progress bar while the map is loaded', () => {
     getByDataTestId('map-loading-progress').should('be.visible')
  })

  it.only('I can browse the artworks in the map', () => {
      cy.get('.mapboxgl-mapclick').click('center')
  })
})
