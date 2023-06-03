
describe('Css Locators', () => {
    it('csslocators',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        
        cy.get('.oxd-button').click()

        cy.get('.oxd-text--h6').contains('Dashboard')

    })
})