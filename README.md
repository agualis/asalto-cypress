## Asalto al e2e: Taller cypress bilbostack2019 

[Good shit](https://asalto.firebaseapp.com/#/)

## Setup

In this repository:

`npm install`

We are going to e2e test this [asalto PWA](https://github.com/agualis/asalto)

Clone the repository and follow the readme instructions to install and run the app locally

## Run

### Run tests in development mode (electron desktop)

`npm run e2e`

### Run tests in CI mode (headless with chrome browser)

`npm run ci`

### Run a concrete test file

`./node_modules/.bin/cypress run --spec 'cypress/integration/asalto/citizen/map.spec.js' --headed --browser=chrome`

### Run tests with a pattern

`./node_modules/.bin/cypress run --spec 'cypress/integration/asalto/superadmin/*.spec.js'`

## Learn Cypress

Check their incredible [documentation](https://www.cypress.io/).

## EXERCISE 1: Creating the first test

Checkout the [Exercise1  branch](https://github.com/agualis/asalto-cypress/tree/) for the initial setup.     

- Create a simple test that opens *google* homepage
- Search *bilbostack* term
- Open the first result and check that the bilbostack page has been shown

Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the solution.     


## EXERCISE 2: Login with user and password

### Task1
- Go to */superlogin* page
- Fill user/password (superadmin@gmail.com/patata)
- Check that the superadmin user is logged in

### Task2
- Check that the user can logout

Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the final solution.     

## EXERCISE 3: List of artworks

### Task1
Check that the user can open* a page with a list of artworks and count that there are 3

*Tip: You can click the *works* option in the menu or directly visit the corresponding route

Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the final solution.     
 
### Task2
Make sure that you always see the same works in every execution

*Tip: if you login as superadmin you have a secret page (/reset-db) to reset the DB --> Deterministic seed FTW 

## EXERCISE 4: Create a new artwork

### Task1 
Test that you can create a new work by uploading an image with default crop.

*Tip1: Cypress does not support native file uploads so you will need to use some black magic. 
*Tip2: Check the commands that we prepared for you.

### Task2
Check that you can zoom-in and crop an uploaded file. 

*Tip: You can use simulate mouse + click events or directly use the range slider under the image to crop. 

Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the final solution.     

## EXERCISE 5:
Test that a user can signin/login with her personal gmail account. 

*Tip: when you aren't logged in as superadmin, you will find a 

Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the final solution.     

## EXERCISE 6:

Check that every tested feature works in mobile screens. 


Checkout the [Step  branch](https://github.com/agualis/asalto-cypress/tree/) for the final solution.     

## EXERCISE 7: Final Boss

As you can see, the app is buggy and it's not finished yet. 
Can you discover some bugs and fix them?


## Recap
- How many flaky tests did we have along the workshop?


## Takeaways

- Test the WHAT, not the HOW
- Just test critical and happy paths
- Don't forget the testing pyramid (cypress does not replace unit and contract tests)
- Use Page Object pattern
- Create helpers to make your life easier
- Don't use brittle selectors but, be pragmatic if you need it
- Create commands to save time with repetitive/complex tasks (login, upload file, reset state...)
- Prepare your db seed to make the tests deterministic
- You can use cypress to test your User Storie's *DODs* in *ATDD* mode and/or to cover *legacy* code or 
- Don't use Selenium never again :P
- Share what you learnt with the community ;)
