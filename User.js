const Person = require('./Person');
const Address = require('./Address');
const Service = require('./Service');
const Photo = require('./Photo');
const Album = require('./Album');
const Video = require('./Video');
const Thumbnail = require('./Thumbnail');
const Review = require('./Review');

const _mobileNumber = Symbol('mobileNumber');
const _emailVerified = Symbol('emailVerified');
const _verifiedUser = Symbol('verifiedUser');
const _address = Symbol('address');
const _review = Symbol('review');

class User extends Person {
    constructor({id, name, email, password, role, profilePicture, mobileNumber}) {
        super({id, name, email, password, role, profilePicture});

        this[_mobileNumber] = mobileNumber;
        this[_emailVerified] = false;
        this[_verifiedUser] = false;
        this[_address] = null;
        this[_review] = null;
    }

    get mobileNumber() {
        return this[_mobileNumber];
    }

    get address() {
        return this[_address];
    }

    get emailVerified() {
        return this[_emailVerified];
    }

    get verifiedUser() {
        return this[_verifiedUser];
    }

    set address(value) {
        this[_address] = value;
    }

    set review(value) {
        this[_review] = value;
    }

    verifyEmail() {
        this[_emailVerified] = true;
    }

    verifyUser() {
        this[_verifiedUser] = true;
    }

    toString() {
        return {
            ...super.toString(),
            mobileNumber: this[_mobileNumber],
            emailVerified: this[_emailVerified],
            verifyUser: this[_verifiedUser],
            review: this[_review],
            address: {
                ...this[_address]
            }
        }
    }
}


const createUser = new User({
    id: '1',
    name: 'Email Das',
    email: 'dev.emondas@gmail.com',
    password: 'Hello world',
    role: 'user',
    profilePicture: 'https://emondas.com/emondas.jpg',
    mobileNumber: '01680964784'
})

createUser.review;

createUser.address = new Address({
    city: 'Chittagong',
    upazila: 'Raozan'
}).toString();


const photo1 = new Photo({
    id: '1',
    serviceId: '1',
    photo: 'https://photo.com/photo1'
}).toString();

const thumbnail = new Thumbnail({
    id: '1',
    serviceId: '1',
    thumbnail: 'https://thumbnail'
}).toString();

const video = new Video({
    id: '1',
    serviceId: '1',
    video: 'https://video'
}).toString();

const album1 = new Album({
    id: '1',
    serviceId: '1'
});

const albumPhoto1 =  new Photo({
    id: '1',
    albumId: '1',
    photo: 'https://photo.com/photo2'
}).toString();

album1.addPhoto(albumPhoto1)

const Service1 = new Service({
    id: '1',
    title: 'Service1',
    description: 'Description of service 1'
});
Service1.addPhoto(photo1);
Service1.addAlbum(album1.toString());
Service1.addThumbnail(thumbnail);
Service1.addVideo(video);

const review = new Review({
    id: '1',
    serviceId: '1',
    description: 'This is review description',
    star: 4.5,
    userId: '1',
    spend: 500
}).toString();

Service1.addReview(review);
createUser.review = review;

const Service2 = new Service({
    id: '2',
    title: 'Service2',
    description: 'Description of service 2'
}).toString();

createUser.addService(Service1.toString());
createUser.addService(Service2);

console.log(createUser.toString());