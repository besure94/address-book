import Address from './../src/address.js';
import Contact from './../src/contact.js';
import AddressBook from './../src/addressbook';

describe('Address', () => {
  test('should correctly create an address object with an address type and address detail', () => {
    const address = new Address("personal", "email");
    expect(address.type).toBe("personal");
    expect(address.detail).toBe("email");
  });
});

describe('Contact', () => {
  test('should correctly create a contact object with properties for first name, last name, phone number, email address, and physical address', () => {
    const contact = new Contact("Andrew", "Johnson", "503-541-9710", "ajohnson@gmail.com", "12000 SE Foster Road");
    expect(contact.firstName).toBe("Andrew");
    expect(contact.lastName).toBe("Johnson");
    expect(contact.phoneNumber).toBe("503-541-9710");
    expect(contact.emailAddresses).toBe("ajohnson@gmail.com");
    expect(contact.physicalAddresses).toBe("12000 SE Foster Road");
  });
  test('should correctly use a method to combine the first and last name of the contact', () => {
    const contactName = new Contact("Andrew", "Johnson");
    expect(contactName.fullName()).toBe("Andrew Johnson");
  });
});

describe('AddressBook', () => {
  test('should correctly create an address book object with properties for contacts and current contact ID', () => {
    const addressBook = new AddressBook();
    expect(addressBook.contacts).toEqual({});
    expect(addressBook.currentId).toEqual(0);
  });
  test('should correctly use a method to add a contact containing a unique ID and the contacts name', () => {
    const testAddressBook = new AddressBook();
    const newContact = new Contact("Andrew", "Johnson", "503-541-9710", "ajohnson@gmail.com", "12000 SE Foster Road");
    testAddressBook.addContact(newContact);
    expect(testAddressBook.currentId).toEqual(testAddressBook.contacts[testAddressBook.currentId].id);
  });
  test('should correctly use a method to return a contact based on its ID', () => {
    const searchAddressBook = new AddressBook();
    const searchContact = new Contact("Andrew", "Johnson", "503-541-9710", "ajohnson@gmail.com", "12000 SE Foster Road");
    searchAddressBook.addContact(searchContact);
    const foundContact = searchAddressBook.findContact(1);
    expect(foundContact).toEqual(searchAddressBook.contacts[1]);
  });
  test('should return false if contact is not found', () => {
    const searchAddressBook = new AddressBook();
    const searchContact = new Contact("Andrew", "Johnson", "503-541-9710", "ajohnson@gmail.com", "12000 SE Foster Road");
    searchAddressBook.addContact(searchContact);
    const foundContact = searchAddressBook.findContact(2);
    expect(foundContact).toEqual(false);
  });
  test('should correctly delete a contact or return false if contact is not found', () => {
    const editAddressBook = new AddressBook();
    const removedContact = new Contact("Andrew", "Johnson", "503-541-9710", "ajohnson@gmail.com", "12000 SE Foster Road");
    editAddressBook.addContact(removedContact);
    const deleteResults = editAddressBook.deleteContact(1);
    const falseDeleteResult = editAddressBook.deleteContact(2);
    expect(deleteResults).toEqual(true);
    expect(falseDeleteResult).toEqual(false);
  });
});