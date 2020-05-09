describe('xpath with cypress example', () => { 
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should enter the value in element identified using xpath', () =>{
        cy.xpath('//*[@id = "user_login"]').type('userName')
    })
})