import { login } from "../components/register.htm-components/contactListApp.js";
import { addUser } from "../components/addUser-components/addUser.js";
import { contactList } from "../components/contactList-components/contactList.js";
import { addContact } from "../components/addContact-components/addContact.js";

let counter = 0;

describe('Sign-up Tests, Alert Messages, Contact Creation, Logout', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Full Registration and Contact Creation Flow', () => {
        /*Automate the signup process, including form validation, required fields, etc.
        //Use static values for the username and password to register, for name and lastname 
        use faker.js to generate all data needed by the inputs.*/
        login.goToAddUser();
        addUser.AlertMessageRequiredFields();
        addUser.AddFirstUser();
        contactList.ClickButtonLogout();
        //Login the application.
        login.loginUser();
        /*Create a new CSV file and use it under the fixtures folder. The file should contain 3 contacts 
        with all information needed by the website form. (Check contact creation form).
        Create 3 new contacts in the application by using the CSV file information. 
        (Addition should be dynamic).*/
        contactList.ClickButtonContactList();
        addContact.AlertMessageRequiredFields();
        cy.task('parseCsv', { filePath: 'contacts.csv' }).then((contacts) => {
            console.log(contacts);
            contacts.forEach((contact) => {
                addContact.CreateContact(
                    contact.firstName,
                    contact.lastName,
                    contact.dateOfBirth,
                    contact.email,
                    contact.phone,
                    contact.streetAddress1,
                    contact.streetAddress2,
                    contact.city,
                    contact.stateOrProvince,
                    contact.postalCode,
                    contact.country
                );
                addContact.ClickButtonSubmitButton();
                cy.wait(1000);
                contactList.ClickButtonContactList();
                counter++;
            });

            if (counter === 3) {
                //Logout the application.
                contactList.ClickButtonLogout();
            }
        });
    });
})