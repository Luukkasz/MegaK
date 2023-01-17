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
const child_record_1 = require("../day_1_listaMikolajaTest/records/child-record");
const db_1 = require("../day_1_listaMikolajaTest/utils/db");
let child;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    child = yield child_record_1.ChildRecord.getOne('777777');
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    db_1.pool.end();
}));
const myMock = jest
    .spyOn(child_record_1.ChildRecord.prototype, 'insert')
    .mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () {
    return 'test';
}));
test('foobar test', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(child).toBeDefined();
}));
//# sourceMappingURL=test.test.js.map