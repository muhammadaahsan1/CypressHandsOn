// before
// after
// beforeEach
// AfterEach

describe("MyTestSuite", ()=>{

    before(()=>{
        cy.log("***** Launch App *****")
    })

    after(()=>{
        cy.log("***** Close App *****")
    })

    beforeEach(()=>{
        cy.log("***** Login *****")
    })

    afterEach(()=>{
        cy.log("***** Logout *****")
    })

    it.skip('search', ()=> {

        cy.log("***** Searching ***")


    })

    it.only('Advance search', ()=> {

        cy.log("***** Advance Searching *****")


    })
    it('Listing Products', ()=> {

        cy.log("***** Listing Products *****")


    })
})