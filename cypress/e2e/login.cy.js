import LoginPage from '../support/page_objects/LoginPage'

describe('Airwallex Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('C10001 - Should display login form elements', () => {
    LoginPage.getEmailInput().should('be.visible');
    LoginPage.getPasswordInput().should('be.visible');
    LoginPage.getLoginButton().should('be.visible');
  });

  it('C10002 - Should show error on invalid credentials', () => {
    cy.fixture('users').then(users => {
      LoginPage.login(users.invalidUser.email, users.invalidUser.password);
    });
    LoginPage.getErrorMessage().should('contain.text', 'Invalid email or password');
  });

  it('C10003 - Should login successfully with valid credentials', () => {
    // Using secrets from env
    const email = Cypress.env('AIRWALLEX_USER');
    const password = Cypress.env('AIRWALLEX_PASS');
    LoginPage.login(email, password);
    cy.url().should('include', '/app');
    // Add further checks for successful login (e.g. presence of dashboard)
  });
});