describe("Alerts", ()=>{

    // (1) Javascript Alert: It will have some text and an "OK" button
    it("Js Alert", ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        // cypress will automatically close window by using Ok button
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        cy.get("#result").should('have.text', "You successfully clicked an alert")
    })


    // (2) Javascript Confirm Alert: It will have some text with "Ok" and "Cancel" buttons
    it("Js Confirm Alert -Ok", ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        // cypress automatically closed alert window by using ok button-default
        cy.get("#result").should('have.text', "You clicked: Ok")
    })

    // (2) Javascript Confirm Alert: It will have some text with "Ok" and "Cancel" buttons
    it("Js Confirm Alert -Cancel", ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })


        cy.on('window:confirm', ()=> false) // Cypress closes alert window using cancel button 
        cy.get("#result").should('have.text', "You clicked: Cancel")


    })

    // (3) Javascript Prompt Alert: It will have some text with text box for user input 
    // along with "Ok" and "Cancel" buttons
    it("Js Prompt Alert ", ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()

  
        cy.get("#result").should('have.text', "You entered: welcome")


    })


    // (4) Authentication Alert
    it("Js Prompt Alert ", ()=>{

        //Approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
                                                                        {
                                                                            username: "admin", 
                                                                            password: "admin"
                                                                        }
                                                                    })

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")


        // Approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")

    })
})