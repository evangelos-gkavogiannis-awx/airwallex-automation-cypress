class LoginPage {
  visit() {
    cy.visit('https://demo.airwallex.com/app/login?redirect=/app%3F');
  }
  getEmailInput() {
    return cy.get('input[name="email"]');
  }
  getPasswordInput() {
    return cy.get('input[name="password"]');
  }
  getLoginButton() {
    return cy.contains('Log in');
  }
  login(email, password) {
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
  getErrorMessage() {
    return cy.contains('Invalid email or password');
  }
}
export default new LoginPage();