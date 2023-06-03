describe("MyTestSuit", ()=>{
    // Direct Access
    it("FixtureDemoTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
    
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected)
        })


    })

    // Access through Hook - for multiple it blocks
    let userData
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userData = data
        })
    })
    it("FixturesDemo Test", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userData.username)
            cy.get("input[placeholder='Password']").type(userData.password)
            cy.get("button[type='submit']").click()
    
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userData.expected)

    })
})