describe("Check UI Elements", ()=>{
    // it("Check Radio Buttons", ()=>{

    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
    //     // Visibility of radio buttons
    //     cy.get("input#male").should("be.visible")
    //     cy.get("input#female").should("be.visible")

    //     // Selecting radio buttons
    //     cy.get("input#male").check().should("be.checked")
    //     cy.get("input#female").should("not.be.checked")
        
    //     cy.get("input#female").check().should("be.checked")
    //     cy.get("input#male").should("not.be.checked")

    // })

    it("Check Radio Buttons", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        // Visibility of element
        // cy.get("input#monday").should("be.visible")

        // Selecting single check box
        // cy.get("input#monday ").check().should("be.checked")

        //Unselecting check box
        // cy.get("input#monday").uncheck().should("not.be.checked")
        
        // Slecting all the check boxes
        // cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        // cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // // Select First Checkbox
        // cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        // cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")


    })
})