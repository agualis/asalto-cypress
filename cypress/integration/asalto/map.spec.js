/// <reference types="Cypress" />

import { getByDataTestId } from '../../common/helpers'

context('When using Asalto', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('citizen can click hidden popup', () => {
    cy.visit('/#/map/-0.9268993,41.6510289')
    cy.get('img').first().click({force: true})
    getByDataTestId('detail-carousel').click()
    getByDataTestId('close-detail-carousel').click()
  })

  it('citizen can', () => {
    cy.wait(4000)
    cy.get('.mapboxgl-ctrl-zoom-in').click().click().click()
    cy.get('.mapboxgl-popup-content').first().click()

    // cy.get('.mapboxgl-canvas').trigger('mousedown', { which: 1 })
    //     .trigger('mousemove', { clientX: 0, clientY: 3000 })
    //     .trigger('mouseup', {force: true})
  })

  it('can do fullscreen', () => {
    cy.wait(4000)
    getByDataTestId('fullscreen').trigger('click')
  })

})
