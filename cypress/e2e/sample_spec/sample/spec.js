import { 
    Given, 
    When, 
    Then
} from "@badeball/cypress-cucumber-preprocessor";
  
before(() => {
    cy.log('sample 1')
})


/**
 * Scenario: Runs sample 1 
 */
When('I navigate to google', function () {
    cy.visit('')
})

Then('I should see the google search box', function () {
    cy.url().should( 'include', 'google.com' )
    cy.get('input[title="Search"]').should('be.visible')
})