export default function Contact(firstName, lastName, phoneNumber, emailAddresses, physicalAddresses) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.emailAddresses = emailAddresses;
	this.physicalAddresses = physicalAddresses;
}

Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
};