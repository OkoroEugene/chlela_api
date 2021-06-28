"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileService_1 = __importDefault(require("../services/fileService"));
var path_1 = __importDefault(require("path"));
test('node images works', function () {
    var fake_path = path_1.default.join(__dirname, '../../public/imgs/test1.jpeg');
    expect(fileService_1.default(fake_path)).not.toBeNull();
});
