"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var fileSchema = new mongoose_1.default.Schema({
    original_file: {
        type: String,
    },
    framed_file: {
        type: String,
    }
});
var File = mongoose_1.default.model('File', fileSchema);
exports.default = File;
