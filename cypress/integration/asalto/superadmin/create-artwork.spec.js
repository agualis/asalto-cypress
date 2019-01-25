/// <reference types="Cypress" />

import { changeFirstRangeInput, clickButton, dataTestSelector, ENTER, fillInput, fillTextArea, getByDataTestId, getFirstRangeInput, isVisible } from '../../../common/helpers'

context('As superadmin', () => {

  before(() => {
    cy.loginWithSuperAdminUser()
  })

  const WINDOW_OPEN_ALIAS = 'windowOpen'
  const WINDOW_OPEN = '@windowOpen'
  beforeEach(() => {
    cy.visit('/create-artwork', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as(WINDOW_OPEN_ALIAS)
      }
    })
  })

  it('I can create a new artwork', () => {
    getByDataTestId('new-artwork-title').eq(1).click().type('El Bilbostackazo')
    // getByDataTestId('new-artwork-author').eq(1).click().type('The Basque Banksy')
    fillInput('new-artwork-author', 'The Basque Banksy')
    getByDataTestId('upload-file').click()
    fillTextArea('new-artwork-description',
      `Se trata de una pedazo de obra en acuarela.${ENTER}¿Cómo te quedas?`)
  })

  it('I can upload a file', () => {

    const fileName = "../fixtures/obey.png"
    cy.uploadFile(fileName, dataTestSelector('upload-file'))

    isVisible('.cr-overlay')
    isVisible('.cr-slider')

    changeFirstRangeInput(1.1)
    changeFirstRangeInput(1.4)
    changeFirstRangeInput(1.2)

    clickButton('crop-preview')
  })
})
