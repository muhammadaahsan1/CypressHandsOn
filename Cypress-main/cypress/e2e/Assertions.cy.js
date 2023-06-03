
describe("Assertions Demo", ()=>{
    it("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // Implicit Assertions => should , and

        // cy.url().should('include','orangehrmlive.com') 
        // cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain', 'orangehrm')

        // cy.url().should('include','orangehrmlive.com') 
        // .should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain', 'orangehrm')

        cy.url().should('include','orangehrmlive.com') 
        .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain', 'orangehrm')
        .and('not.contain', 'Greenhrm')

        cy.title().should('include', 'Orange')
        .and('eq', "OrangeHRM")
        .and('contain', "HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible') //  Check logo is visible or not
        cy.get('.orangehrm-login-branding > img').should('exist') // logo exist or not

        cy.xpath("//a").should('have.length', '5') // Check no. of links 

        cy.get("input[placeholder='Username']").type("Admin") // Provide value to input box
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    })

    it("Explicit Assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // We can customize explicit assertions
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit'] ").click()

        let expName = "Deep Patel"

        cy.get(".oxd-userdropdown-name").then( (x)=>{
                let actName = x.text()

                // BDD style
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)

                //TDD style
                assert.equal(actName,expName)
                assert.notEqual(actName,expName)
        }  )
    })
})