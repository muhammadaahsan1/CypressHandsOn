describe('Handle Tabs', ()=>{
    
    it.skip('Approach 1', ()=>{
        
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get(".example > a").invoke('removeAttr','target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

        cy.go('back') // Go back to Parent Tab
    })
    
    it('Approach 2', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        cy.get(".example > a").then((e)=>{ 
            let url=e.prop('href') // 
            cy.visit(url)
        })

        // In approach 2 there is a limitation that the base url should be match like ("https://the-internet.herokuapp.com/ ")
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

        cy.go('back') // Go back to Parent Tab
    })
})