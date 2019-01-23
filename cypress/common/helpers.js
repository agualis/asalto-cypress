//CYPRESS KEYBOARD KEYS:
export const ENTER = '{enter}'
export const DOWN_ARROW = '{downarrow}'
export const BACKSPACE = '{backspace}'

export const OPTIONS = ()=> ({force: true})

export const dataTestSelector = id => `[data-test=${id}]`
export const getByDataTestId = (id) => cy.get(dataTestSelector(id))

export const getSelectByName = (name) => cy.get(`select[name="${name}"]`)

export const getFirstRangeInput = () => cy.get('input[type=range]')
export const changeFirstRangeInput = (value) =>  getFirstRangeInput().invoke('val', value).trigger('change')

export const clickButton = (id) => getByDataTestId(id).click()

// We get the second element with eq(1) cause quasar creates 2 tags nodes
export const fillInput = (id, value) => getByDataTestId(id).eq(1).type(value)
export const fillTextArea = (id, value) => getByDataTestId(id).eq(2).type(value)


export const selectByClass= (className, value) => {
    cy.get(className).click()
    cy.contains(value).click()
}

export const urlContains = (urlPart) => cy.url().should('contain', urlPart)
export const urlIs = (urlPart) => cy.url().should('equals', urlPart)

export const isVisible = (selector) => cy.get(selector).should('be.visible')

