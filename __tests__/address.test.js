import Address from './../src/address.js';

describe('Address', () => {
  test('should correctly create an address object with an address type and address details', () => {
    const address = new Address("personal", "email");
    expect(address.type).toBe("personal");
    expect(address.detail).toBe("email");
  })
})
