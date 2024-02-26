const _id = Symbol('id');
const _serviceId = Symbol('serviceId');
const _thumbnail = Symbol('thumbnail');

class Thumbnail {
    constructor({
        id,
        serviceId,
        thumbnail
    }) {
        this[_id] = id;
        this[_serviceId] = serviceId;
        this[_thumbnail] = thumbnail;
    }

    get id() {
        return this[_id];
    }

    get serviceId() {
        return this[_serviceId];
    }

    get thumbnail() {
        return this[_thumbnail];
    }

    toString() {
        return {
            id: this[_id],
            serviceId: this[_serviceId],
            thumbnail: this[_thumbnail],
        }
    }
}

module.exports = Thumbnail;