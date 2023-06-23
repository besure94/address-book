function AddressBook() {
	this.contacts = {};
	this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
	contact.id = this.assignId();
	this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
	this.currentId += 1;
	return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
	if (this.contacts[id] !== undefined) {
		return this.contacts[id];
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

function Address(addressType, addressDetail) {
	this.type = addressType;
	this.detail = addressDetail;
}

function Contact(firstName, lastName, phoneNumber, emailAddresses, physicalAddresses) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.emailAddresses = emailAddresses;
	this.physicalAddresses = physicalAddresses;
}

Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
};

let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
	let contactsDiv = document.querySelector("div#contacts");
	contactsDiv.innerText = null;
	const ul = document.createElement("ul");
	Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
		const contact = addressBookToDisplay.findContact(key);
		const li = document.createElement("li");
		li.append(contact.fullName());
		li.setAttribute("id", contact.id);
		ul.append(li);
	});
	contactsDiv.append(ul);
}

function displayContactDetails(event) {
	const contact = addressBook.findContact(event.target.id);
	document.querySelector(".first-name").innerText = contact.firstName;
	document.querySelector(".last-name").innerText = contact.lastName;
	document.querySelector(".phone-number").innerText = contact.phoneNumber;
	let emailAddressDiv = document.querySelector("div#email-address-list");
	emailAddressDiv.innerHTML = "";
	const ul = document.createElement("ul");
	contact.emailAddresses.forEach(function(emailAddress) {
		let li = document.createElement("li");
		li.append("(" + emailAddress.type + ") " + emailAddress.detail);
		ul.append(li);
	});
	emailAddressDiv.append(ul);

	let physicalAddressDiv = document.querySelector("div#physical-address-list");
	physicalAddressDiv.innerHTML = "";
	const ulPhysicalAddresses = document.createElement("ul");
	contact.physicalAddresses.forEach(function(physicalAddress) {
		let li = document.createElement("li");
		li.append(" (" + physicalAddress.type + ") " + physicalAddress.detail);
		ulPhysicalAddresses.append(li);
	});
	physicalAddressDiv.append(ulPhysicalAddresses);
	document.querySelector("button.delete").setAttribute("id", contact.id);
	document.querySelector("div#contact-details").removeAttribute("class");
}

function handleDelete(event) {
	addressBook.deleteContact(event.target.id);
	document.querySelector("button.delete").removeAttribute("id");
	document.querySelector("div#contact-details").setAttribute("class", "hidden");
	listContacts(addressBook);
}

function createEmailAddresses() {
	let arrayOfAddresses = [];
	for(index = 1; index <= 3; index++) {
		let emailValueTargetString = "input#new-email-address" + index;
		let emailTypeTargetString = "input[name='email-address-type" + index + "']:checked";
		let emailAddress = document.querySelector(emailValueTargetString).value;
		let emailType = document.querySelector(emailTypeTargetString).value;
		if (emailAddress.length !== 0) {
			let newAddress = new Address(emailType, emailAddress);
			arrayOfAddresses.push(newAddress);
		}
	}
	return arrayOfAddresses;
}

function createPhysicalAddresses() {
	let arrayOfPhysicalAddresses = [];
	for(index = 1; index <= 3; index++) {
		let physicalAddressValueTargetString = "input#new-physical-address" + index;
		let physicalAddressTypeTargetString = "input[name='physical-address-type" + index + "']:checked";
		let physicalAddress = document.querySelector(physicalAddressValueTargetString).value;
		let physicalAddressType = document.querySelector(physicalAddressTypeTargetString).value;
		if (physicalAddress.length !== 0) {
			let newPhysicalAddress = new Address(physicalAddressType, physicalAddress);
			arrayOfPhysicalAddresses.push(newPhysicalAddress);
		}
	}
	return arrayOfPhysicalAddresses;
}

function handleFormSubmission(event) {
	event.preventDefault();
	createEmailAddresses();
	createPhysicalAddresses();
	const inputtedFirstName = document.querySelector("input#new-first-name").value;
	const inputtedLastName = document.querySelector("input#new-last-name").value;
	const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
	const physicalAddresses = createPhysicalAddresses();
	const emailAddresses = createEmailAddresses();
	let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, emailAddresses, physicalAddresses);
	addressBook.addContact(newContact);
	listContacts(addressBook);
	document.querySelector("input#new-first-name").value = null;
	document.querySelector("input#new-last-name").value = null;
	document.querySelector("input#new-phone-number").value = null;
	document.querySelector("input#new-email-address1").value = null;
	document.querySelector("input#new-email-address2").value = null;
	document.querySelector("input#new-email-address3").value = null;
	document.querySelector("input#new-physical-address1").value = null;
	document.querySelector("input#new-physical-address2").value = null;
	document.querySelector("input#new-physical-address3").value = null;
}

window.addEventListener("load", function () {
	document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
	document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
	document.querySelector("button.delete").addEventListener("click", handleDelete);
});