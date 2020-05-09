describe('login with fixtures data', () =>{
    it('should try to login' ,() =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture('user').then(user =>{
            const userName = user.userName
            const password = user.password
            cy.get('#user_login').type(userName)
            cy.get('#user_password').type(password)
        })
    })
})