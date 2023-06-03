
describe("Custom Commands", ()=>{

    it("Handling links",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Apple MacBook Pro 13-inch")
    })
    

    it.skip("Overwriting existing command",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Apple MacBook Pro 13-inch")
    })

    it.only("Login command",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("Log in")
        cy.loginapp("testing@gmail.com","test123")
    })
})