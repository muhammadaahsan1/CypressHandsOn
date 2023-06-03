describe('mysuit', ()=>{
    it("NavigationTest", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store') // Home Page
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text', "Cameras") // Cameras

        cy.go("back") // Go back to home
        cy.title().should('eq', 'Your Store')

        cy.go("forward") // Cameras
        cy.get("div[id='content'] h2").should('have.text', "Cameras") // Cameras

        cy.go(-1) // Home
        cy.title().should('eq', 'Your Store')


        cy.go(1) // Cameras
        cy.get("div[id='content'] h2").should('have.text', "Cameras") // Cameras
        

        cy.reload() // Reload the page


    })
})