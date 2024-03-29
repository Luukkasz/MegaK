"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this._loggedIn = false;
        this._email = null;
    }
    get loggedIn() {
        return this._loggedIn;
    }
    get email() {
        return this._email;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map