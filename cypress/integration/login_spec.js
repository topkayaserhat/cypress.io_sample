describe('YUI Framework', function () {
    it('Login test', function () {

        // Open browser visit url
        cy.visit('https://europe3-cert.sideupreply.eu/reply/wms')

        // Find html element and type value
        cy.get('[name=username]')
            .type('test.t')

        cy.get('[name=password]')
            .type('3edc.4rfvC')

        //Find login button and click  
        cy.get('[name=login]').click()

        // Find site dropdown and type value
        cy.get('[name=site]')
            .should('be.visible')
            .type('SITE004')

        //Another way to find html element. Check Save button has css class
        cy.contains('Save').should('have.class', 'disabled')

        // Find html element which contains SITE004 and click
        cy.contains('SITE004').click()

        // Find save button and click
        cy.contains('Save').click()

        // Url should be contains /reply/wms
        cy.url().should('include', '/reply/wms')

        //Click ASN With Anomalies Dashboard card.
        cy.get('[data-view-name=numberOfAsnWithAnomalies]')
            .contains('details').click({
                force: true
            })

        //Check url contains
        cy.url().should('include', 'InboundAsn?status=CREATED&status=RECEIVED&_condition=exists')
    })
})