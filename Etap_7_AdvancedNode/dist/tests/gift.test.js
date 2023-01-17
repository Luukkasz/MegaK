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
const gift_record_1 = require("../day_1_listaMikolajaTest/records/gift-record");
const db_1 = require("../day_1_listaMikolajaTest/utils/db");
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.end();
}));
test('Not inserted GiftRecord should have no id', () => __awaiter(void 0, void 0, void 0, function* () {
    const newGift = new gift_record_1.GiftRecord({
        name: 'testowy',
        count: 1231,
    });
    expect(newGift.id).toBeUndefined();
}));
test('Inserted GiftRecord should have id', () => __awaiter(void 0, void 0, void 0, function* () {
    const newGift = new gift_record_1.GiftRecord({
        name: 'testowy',
        count: 1231,
    });
    yield newGift.insert();
    expect(newGift.id).toBeDefined();
}));
//# sourceMappingURL=gift.test.js.map