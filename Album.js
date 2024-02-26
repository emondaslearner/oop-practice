const _id = Symbol("id");
const _serviceId = Symbol("serviceId");
const _photos = Symbol("_photos");

class Album {
  constructor({ id, serviceId }) {
    this[_id] = id;
    this[_serviceId] = serviceId;
    this[_photos] = [];
  }

  get id() {
    return this[_id];
  }

  get serviceId() {
    return this[_serviceId];
  }

  addPhoto(value) {
    this[_photos].push(value);
  }

  deletePhoto(index) {
    if (index >= 0 || this[_photos].length > index) {
      this[_photos].splice(index, 1);
    }
  }

  toString() {
    return {
      id: this[_id],
      serviceId: this[_serviceId],
      photos: this[_photos],
    };
  }
}

module.exports = Album;
