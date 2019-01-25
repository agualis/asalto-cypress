import { SUPERADMIN_PASSWORD, SUPERADMIN_USER } from './globals'
import { urlContains } from './helpers'
import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import { config } from '../../../asalto/src/plugins/firebase'


export const login = () => {
  enterUser(SUPERADMIN_USER)
  enterPassword(SUPERADMIN_PASSWORD)
  clickButton('button:first')
  urlContains('home')
}

export const programmaticLogin = () => {
  if (firebase.apps.length) return
  firebaseApp.initializeApp(config)
    firebase.auth().signInWithEmailAndPassword(SUPERADMIN_USER, SUPERADMIN_PASSWORD).then((user) => {
    })
}

export const programmaticLogout = () => {
  firebaseApp.auth().signOut()
}

const enterUser = (user) => {
  cy.get('#username').type(user)
}

const enterPassword = (password) => {
  cy.get('#password').type(password)
}

const clickButton = (buttonId) => {
  cy.get(buttonId).click()
}
