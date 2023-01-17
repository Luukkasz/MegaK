"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftRecord = void 0;
const db_1 = require("../utils/db");
const error_1 = require("../utils/error");
const uuid_1 = require("uuid");
class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new error_1.ValidationError('Nazwa prezentu musi miec od 3 do 55 znaków.');
        }
        if (!obj.count || obj.count < 1 || obj.count > 999999) {
            throw new error_1.ValidationError('Liczba sztuk prezentu powinna się mieścić w przedziale 1 - 999999.');
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.id) {
                this.id = (0, uuid_1.v4)();
            }
            yield db_1.pool.execute("INSERT INTO `gifts` VALUES(:id, :name, :count)", {
                id: this.id,
                name: this.name,
                count: this.count,
            });
            return this.id;
        });
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield db_1.pool.execute('SELECT * FROM `gifts`'));
            // sprawdz
            return results.map(obj => new GiftRecord(obj));
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield db_1.pool.execute('SELECT * FROM `gifts` WHERE `id` = :id ', {
                id,
            }));
            return results.length === 0 ? null : new GiftRecord(results[0]);
        });
    }
    countGivenGifts() {
        return __awaiter(this, void 0, void 0, function* () {
            const [[result]] = (yield db_1.pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id", {
                id: this.id
            }));
            return result.count;
        });
    }
}
exports.GiftRecord = GiftRecord;
//# sourceMappingURL=gift-record.js.map