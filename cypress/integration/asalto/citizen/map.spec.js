/// <reference types="Cypress" />

import { getByDataTestId } from '../../../common/helpers'

const zoomInToRemoveClusters = () => cy.get('.mapboxgl-ctrl-zoom-in')
  .click().click().click()

const zoomInDoubleClicking = () => cy.get('.mapboxgl-canvas').dblclick().dblclick()

const waitUntilMapIsLoaded = () => {
  getByDataTestId('fullscreen-button')
  //cy.wait(4000)
}

const openFirstWorkDetail = () => cy.get('.mapboxgl-popup-content')
  .first().click()

context('As an anonymous citizen browsing the map', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('I can zoom-in and open a work detail', () => {
    waitUntilMapIsLoaded()
    zoomInToRemoveClusters()
    openFirstWorkDetail()
  })

  it('I can open specific coordinates', () => {
    cy.visit('/coordinates/-0.9268993,41.6510289')
  })

  it('I can open and close an artwork gallery', () => {
    waitUntilMapIsLoaded()
    zoomInToRemoveClusters()
    openFirstWorkDetail()
    getByDataTestId('detail-carousel').click({force: true})
    // getByDataTestId('close-detail-carousel').click({force: true})
  })


  it('I can zoom-in with double click', () => {
    waitUntilMapIsLoaded()
    zoomInDoubleClicking()
    //Drag and drop...
  })

  it('I see a spinner before the works are loaded', () => {
    getByDataTestId('works-loading-spinner').should('be.visible')
    // we could spy the response to check that the works are loaded
    getByDataTestId('works-loading-spinner').should('not.be.visible')
  })

  it('I see a progress bar while the map is loaded', () => {
    getByDataTestId('map-loading-progress').should('be.visible')
    waitUntilMapIsLoaded()
    getByDataTestId('map-loading-progress').should('not.be.visible')
  })

  xit('I can click a hidden popup', () => {
    cy.visit('/coordinates/-0.9268993,41.6510289')
    zoomInToRemoveClusters()
    openFirstWorkDetail()
    getByDataTestId('detail-carousel').click({force: true})
    // getByDataTestId('close-detail-carousel').click({force: true})
  })
})
