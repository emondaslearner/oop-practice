const _id = Symbol('id');
const _serviceId = Symbol('serviceId');
const _video = Symbol('video');

class Video {
    constructor({
        id,
        serviceId,
        video
    }) {
        this[_id] = id;
        this[_serviceId] = serviceId;
        this[_video] = video;
    }

    get id() {
        return this[_id];
    }

    get serviceId() {
        return this[_serviceId];
    }

    get video() {
        return this[_video];
    }

    toString() {
        return {
            id: this[_id],
            serviceId: this[_serviceId],
            video: this[_video],
        }
    }
}

module.exports = Video;