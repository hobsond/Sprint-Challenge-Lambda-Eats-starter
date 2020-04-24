describe('Form test for input and submit',()=>{
    it('visit to website',()=>{
        cy.visit('http://localhost:3000/')
        cy.get('[href="/pizzaform"]')
        .click()
        cy.get('[name="name"]')
        .type('david')
        .should('have.value', 'david')
        cy.get('[name="peperoni"]')
        .check()
        cy.get('[name="sausage"]')
        .check()
        cy.get('button')
        .click()
        
        

    })

})