const _id = Symbol("id");
const _title = Symbol("title");
const _description = Symbol("description");
const _photos = Symbol("photos");
const _videos = Symbol("videos");
const _albums = Symbol("albums");
const _reviews = Symbol("reviews");
const _thumbnail = Symbol("thumbnail");

class Service {
  constructor({ id, title, description }) {
    this[_id] = id;
    this[_title] = title;
    this[_description] = description;
    this[_photos] = [];
    this[_albums] = [];
    this[_videos] = [];
    this[_reviews] = [];
    this[_thumbnail] = [];
  }

  get id() {
    return this[_id];
  }

  get title() {
    return this[_title];
  }

  get description() {
    return this[_description];
  }

  addPhoto(value) {
    this[_photos].push(value);
  }

  deletePhoto(index) {
    if (index >= 0 || this[_photos].length > index) {
      this[_photos].splice(index, 1);
    }
  }

  addAlbum(value) {
    this[_albums] = value;
  }

  deleteAlbum(index) {
    if (index >= 0 || this[_albums].length > index) {
      this[_albums].splice(index, 1);
    }
  }

  addVideo(value) {
    this[_videos] = value;
  }

  deleteVideo(index) {
    if (index >= 0 || this[_videos].length > index) {
      this[_videos].splice(index, 1);
    }
  }

  addReview(value) {
    this[_reviews] = value;
  }

  deleteReview(index) {
    if (index >= 0 || this[_reviews].length > index) {
      this[_reviews].splice(index, 1);
    }
  }

  addThumbnail(value) {
    this[_thumbnail] = value;
  }

  deleteThumbnail(index) {
    if (index >= 0 || this[_thumbnail].length > index) {
      this[_thumbnail].splice(index, 1);
    }
  }

  toString() {
    return {
      id: this[_id],
      title: this[_title],
      description: this[_description],
      photo: this[_photos],
      albums: this[_albums],
      videos: this[_videos],
      reviews: this[_reviews],
      thumbnails: this[_thumbnail],
    };
  }
}

module.exports = Service;
