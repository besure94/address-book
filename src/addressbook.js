export default function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] !== undefined) {
//     return this.contacts[id];
//   }
//   return false;
// };

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// };

