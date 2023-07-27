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
    const contact = new Contact("Andrew", "Johnson");
    expect(contact.fullName()).toBe("Andrew Johnson");
  });
});

describe('AddressBook', () => {
  test('should correctly create an address book object with properties for contacts and current contact ID', () => {
    const addressBook = new AddressBook();
    expect(addressBook.contacts).toEqual({});
  });
});