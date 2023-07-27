export default function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
};

AddressBook.prototype.addContact = function(contactObject) {
  contactObject.id = this.assignId();
  this.contacts[contactObject.id] = contactObject;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(contactId) {
  if (this.contacts[contactId] !== undefined) {
    return this.contacts[contactId];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

