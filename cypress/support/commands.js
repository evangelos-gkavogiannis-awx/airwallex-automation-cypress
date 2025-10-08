import LoginPage from './page_objects/LoginPage';

Cypress.Commands.add('login', (email, password) => {
  LoginPage.visit();
  LoginPage.login(email, password);
});