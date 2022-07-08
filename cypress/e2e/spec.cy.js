describe('cypress 10 test', () => {
  it('passes', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesOpen();
    cy.eyesCheckWindow('Main Page');
    cy.eyesClose();
    cy.eyesGetAllTestResults();
  })

})