"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var routes_1 = require("./src/routes");
var PORT = process.env.PORT || 5000;
var app = express_1.default();
app.use(body_parser_1.json());
app.use(express_1.default.static("dist/public"));
//app routes
app.use('/api/file', routes_1.fileRouter);
app.get('/', function (req, res) { return res.send('Welcome to chlela!'); });
//connect to DB
mongoose_1.default.connect('mongodb://localhost:27017/chlela', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function () { return console.log('Connected to the database'); });
process.on('uncaughtException', function (err, origin) {
    console.error(err);
    console.log("Node NOT Exiting...");
});
app.listen(PORT, function () { return console.log("Server is connected at " + PORT); });
