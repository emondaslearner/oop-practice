const _city = Symbol("city");
const _upazila = Symbol("upazila");

class Address {
  constructor({ city, upazila }) {
    this[_city] = city;
    this[_upazila] = upazila;
  }

  get city() {
    return this[_city];
  }

  get upazila() {
    return this[_upazila];
  }

  toString() {
    return {
        city: this[_city],
        upazila: this[_upazila]
    }
  }
}

module.exports = Address;
