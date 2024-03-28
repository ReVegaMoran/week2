import { login } from "../components/register.htm-components/contactListApp.js";
import { addUser } from "../components/addUser-components/addUser.js";
import { contactList } from "../components/contactList-components/contactList.js";
import { addContact } from "../components/addContact-components/addContact.js";

let counter = 0;

describe('Primer test case', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('primera prueba', () => {
        //Automatizar el proceso de registro, incluyendo la validación del formulario, campos obligatorios, etc.
        //Utilice valores estáticos para nombre de usuario y contraseña para registrarse, para nombre y apellidos utilice 
        //faker.js para generar todos los datos necesarios para las entradas.
        login.goToAddUser();
        addUser.AlertMessageRequiredFields();
        addUser.AddFirstUser();
        contactList.ClickButtonLogout();
        //Inicie sesión en la aplicación.
        login.loginUser();
        //- Create 3 new contacts in the application using the information from the CSV file (The addition must be dynamic).
        contactList.ClickButtonContactList();
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
                contactList.ClickButtonLogout();
            }
        });
    });
})