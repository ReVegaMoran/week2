class ContactList {

    elements = {

        getAddContacButton: () => cy.get('[id="add-contact"]'),
        getSubmitButton: () => cy.get('[id="logout"]'),
    }
    ClickButtonLogout() {
        this.elements.getSubmitButton().click();
    }
    ClickButtonContactList() {
        this.elements.getAddContacButton().click();
    }
}

export const contactList = new ContactList;