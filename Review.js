const _id = Symbol('id');
const _serviceId = Symbol('serviceId');
const _userId = Symbol('userId');
const _star = Symbol('star');
const _description = Symbol('description');
const _spend = Symbol('spend');

class Review {
    constructor({
        id,
        serviceId,
        userId,
        star,
        description,
        spend
    }) {
        this[_id] = id;
        this[_serviceId] = serviceId;
        this[_userId] = userId;
        this[_star] = star;
        this[_description] = description;
        this[_spend] = spend;
    }

    get id() {
        return this[_id];
    }

    get serviceId() {
        return this[_serviceId];
    }

    get userId() {
        return this[_userId];
    }

    get star() {
        return this[_star];
    }

    get description() {
        return this[_description];
    }

    get spend() {
        return this[_spend];
    }

    toString() {
        return {
            id: this[_id],
            serviceId: this[_serviceId],
            userId: this[_userId],
            star: this[_star],
            description: this[_description],
            spend: this[_spend],
        }
    }
}

module.exports = Review;