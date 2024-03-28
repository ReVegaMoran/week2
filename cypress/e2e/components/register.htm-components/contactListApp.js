import { faker } from '@faker-js/faker';

class Login {
    constructor() {
        this.generateRandomCredentials();
    }

    generateRandomCredentials() {
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    getEmailInput() {
        return cy.get('[id="email"]');
    }

    getPasswordInput() {
        return cy.get('[id="password"]');
    }

    getSubmitButton() {
        return cy.get('[id="submit"]');
    }

    getSignUpButton() {
        return cy.get('[id="signup"]');
    }

    getRequiredFieldsWarningMessage() {
        return cy.get('[id="error"]');
    }

    goToAddUser() {
        this.getSignUpButton().click();
    }

    checkRequiredFieldsAlert() {
        this.getSubmitButton().click();
        this.getRequiredFieldsWarningMessage().should('contain', 'Incorrect username or password');
    }

    loginUser() {
        this.getEmailInput().type(this.email);
        this.getPasswordInput().type(this.password);
        this.getSubmitButton().click();
    }
}

export const login = new Login;