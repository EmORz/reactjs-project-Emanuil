describe('Pages scenarios', () => {
  it('Home', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Home')


  })
    it('Login', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('h1').contains('Login')

  
  })
})