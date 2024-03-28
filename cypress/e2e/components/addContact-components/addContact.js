class AddContact {

    constructor() {

        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.dateOfBirth = '#birthdate';
        this.email = '#email';
        this.phone = '#phone';
        this.streetAddress1 = '#street1';
        this.streetAddress2 = '#street2';
        this.city = '#city';
        this.stateOrProvince = '#stateProvince';
        this.postalCode = '#postalCode';
        this.country = '#country';
    }

    elements = {

        getFirstNameInput: () => cy.get('[id="firstName"]'),
        getLastNameInput: () => cy.get('[id="lastName"]'),
        getBirthdateInput: () => cy.get('[id="birthdate"]'),
        getEmailInput: () => cy.get('[id="email"]'),
        getPhoneInput: () => cy.get('[id="phone"]'),
        getFirtStreetdInput: () => cy.get('[id="street1"]'),
        getSecondStreetdInput: () => cy.get('[id="street2"]'),
        getcityInput: () => cy.get('[id="city"]'),
        getStateProvinceInput: () => cy.get('[id="stateProvince"]'),
        getPostalCodeInput: () => cy.get('[id="postalCode"]'),
        getCountryInput: () => cy.get('[id="country"]'),
        getSubmitButton: () => cy.get('[id="submit"]'),
        getCencelButton: () => cy.get('[id="cancel"]'),
        getRequiredFieldsWarningMessage: () => cy.get('[id="error"]'),
    }
    CreateContact(firstName, lastName, dateOfBirth, email, phone, streetAddress1, streetAddress2, city, stateOrProvince, postalCode, country) {
        this.elements.getFirstNameInput().type(firstName);
        this.elements.getLastNameInput().type(lastName);
        this.elements.getBirthdateInput().type(dateOfBirth);
        this.elements.getEmailInput().type(email);
        this.elements.getPhoneInput().type(phone);
        this.elements.getFirtStreetdInput().type(streetAddress1);
        this.elements.getSecondStreetdInput().type(streetAddress2);
        this.elements.getcityInput().type(city);
        this.elements.getStateProvinceInput().type(stateOrProvince);
        this.elements.getPostalCodeInput().type(postalCode);
        this.elements.getCountryInput().type(country);
    }
    ClickButtonSubmitButton() {
        this.elements.getSubmitButton().click();
    }
}

export const addContact = new AddContact;