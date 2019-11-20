describe('Angular', function () {
    it('Login test', function () {
         // Open browser visit url
        cy.visit('https://europe3-cert.sideupreply.eu/mobile/reply')

        // Find html element and type value
        cy.get('[name=username]')
            .type('test.t')

        cy.get('[name=password]')
            .type('3edc.4rfvC')

        // Find login button and click it.
        cy.get('[id=login-button]').click()

        // Find html element which contains SITE004 and click it.
        cy.contains('SITE004').click()
       
        // Find img and click it.
        cy.get("[src='main/assets/images/ico_trilaterale.png']").click()

        //Check page header.
        cy.contains('Tasks List').should('be.visible')
    })
})