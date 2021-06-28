"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = __importDefault(require("images"));
var path_1 = __importDefault(require("path"));
function GenerateFile(image_path) {
    try {
        var frame_path = path_1.default.join(__dirname, '../../public/imgs/gold-frame.png');
        var main_path = "imgs/" + Date.now() + "_final.png";
        var output_path = path_1.default.join(__dirname, "../../public/" + main_path);
        var frame_canvas = images_1.default(frame_path);
        var image_canvas = images_1.default(image_path);
        image_canvas
            .size(400)
            .draw(frame_canvas.size(400, image_canvas.height()), 0, 0)
            .save(output_path, {
            quality: 50
        });
        return main_path;
    }
    catch (error) {
        return null;
    }
}
exports.default = GenerateFile;
