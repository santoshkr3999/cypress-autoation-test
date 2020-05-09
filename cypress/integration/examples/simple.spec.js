describe('Navigate to a page', () =>{
    it('amazon should be loaded', ()=> {
        cy.visit('https://amazon.in')
        cy.url().should('include', 'amazon.in')
        cy.viewport('')
    })

    it('click on sign in',() => {
        cy.get('a#nav-link-accountList').click()
    })

    it('enter user name',() => {

        cy.get('input#ap_email').as('userName')
        cy.get('@userName').clear()
        cy.get('@userName').type('9739889368')
    })
    

    it('click continue button', () =>{
        cy.get('input#continue').click()
    })

} )