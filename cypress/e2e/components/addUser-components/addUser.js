import { faker } from '@faker-js/faker';
import { login } from "../register.htm-components/contactListApp.js";

class AddUser {

    constructor() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = login.email;
        this.password = login.password;
    }

    elements = {

        getFirstNameInput: () => cy.get('[id="firstName"]'),
        getLastNameInput: () => cy.get('[id="lastName"]'),
        getEmailInput: () => cy.get('[id="email"]'),
        getPasswordInput: () => cy.get('[id="password"]'),
        getSubmitButton: () => cy.get('[id="submit"]'),
        getCencelButton: () => cy.get('[id="cancel"]'),
        getRequiredFieldsWarningMessage: () => cy.get('[id="error"]'),
    }
    AlertMessageRequiredFields() {
        this.elements.getSubmitButton().click();
        this.elements.getRequiredFieldsWarningMessage().should('contain', 'User validation failed:');
    }
    AddFirstUser() {
        this.elements.getFirstNameInput().type(this.firstName);
        this.elements.getLastNameInput().type(this.lastName);
        this.elements.getEmailInput().type(this.email);
        this.elements.getPasswordInput().type(this.password);
        this.elements.getSubmitButton().click();
    }
}

export const addUser = new AddUser;