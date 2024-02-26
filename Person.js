const _id = Symbol("id");
const _name = Symbol("name");
const _email = Symbol("email");
const _password = Symbol("password");
const _role = Symbol("role");
const _profilePicture = Symbol("profilePicture");
const _services = Symbol("services");

class Person {
  constructor({ id, name, email, password, role, profilePicture }) {
    this[_id] = id;
    this[_name] = name;
    this[_email] = email;
    this[_password] = password;
    this[_role] = role || "user";
    this[_profilePicture] = profilePicture || null;
    this[_services] = [];
  }

  get id() {
    return this[_id];
  }

  get name() {
    return this[_name];
  }

  get email() {
    return this[_email];
  }

  get password() {
    return this[_password];
  }

  get role() {
    return this[_role];
  }

  get profilePicture() {
    return this[_profilePicture];
  }

  get services() {
    return this[_services];
  }

  addService(value) {
    this[_services].push(value);
  }

  deleteServices(index) {
    if(index >= 0 || this[_services].length > index) {
        this[_services].splice(index, 1);
    }
  }

  changeEmail(value) {
    this[_email] = value;
  }

  login() {
    // empty
  }

  forgotPassword(value) {
    this[_password] = value;
  }

  updateProfile({ name, profilePic }) {
    if (name) {
      this[_name] = name;
    }

    if (profilePic) {
      this[_profilePicture] = profilePic;
    }
  }

  toString() {
    return {
            id: this[_id],
            name: this[_name],
            email: this[_email],
            password: this[_password],
            role: this[_role],
            profilePicture: this[_profilePicture],
            services: this[_services],
        }
  }
}

module.exports = Person;
