"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/index");
const supertest_1 = __importDefault(require("supertest"));
before(function (done) {
    index_1.app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
    setTimeout(done, 1000);
});
describe('Contact Message API', () => {
    it('should return an array of messages', function (done) {
        this.timeout(15000);
        (0, supertest_1.default)(index_1.app)
            .get('/contact')
            .expect(200)
            .end((err, res) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(res.body).to.be.an('the app crashed');
            done();
        });
    });
});
