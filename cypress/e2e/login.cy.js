describe('visit the website', () => {
  it('Visit the login page', () => {
    cy.visit('/')
    cy.contains('Menu')
  })
})
