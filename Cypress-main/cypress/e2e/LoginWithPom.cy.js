import Login from "../PageObjects/LoginPage2.js"

describe('pom', ()=>{

    // General Approach
    it("LoginTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', "Dashboard")

    })

    // Using page import model
    it("LoginTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()

    })

    // Using page import model with fixture
    it.only("LoginTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")


        cy.fixture('orangehrm').then((data)=>{
            const ln = new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()

    })

    })

})