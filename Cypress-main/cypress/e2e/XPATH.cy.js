
describe('XPATH Locators', () => {
  it('xpathLocator', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.xpath("//label[@class='oxd-label']")
      .invoke('text')
      .should('contain', 'Username');
  })
})
