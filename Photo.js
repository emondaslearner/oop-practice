const _id = Symbol('id');
const _serviceId = Symbol('serviceId');
const _photo = Symbol('photo');
const _albumId = Symbol('albumId');

class Photo {
    constructor({
        id,
        serviceId,
        photo,
        albumId
    }) {
        this[_id] = id;
        this[_serviceId] = serviceId || null;
        this[_photo] = photo;
        this[albumId] = albumId || null;
    }

    get id() {
        return this[_id];
    }

    get serviceId() {
        return this[_serviceId];
    }

    get photo() {
        return this[_photo];
    }

    get albumId() {
        return this[_albumId];
    }

    toString() {
        return {
            id: this[_id],
            serviceId: this[_serviceId],
            photo: this[_photo],
            albumId: this[_albumId],
        }
    }
}

module.exports = Photo;