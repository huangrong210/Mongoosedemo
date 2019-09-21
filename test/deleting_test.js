/* const MarioChar = require('../models/mariochar');
const mocha = require('mocha');
const assert = require('assert');
describe('存储数据', function () {
    var char;
    // 存储数据
    it('saving data', function () {
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(function (result) {
            assert(result.isNew === false);
        })
    });
    // 通过ID获取数据
    // it('finding data by id~~~', function (done) {
    it('finding data by id~~~', function () {
        MarioChar.findOne({
            _id: char._id
        }).then(function (result) {
            console.log(result);
            // done();
        })
    });
    // 删除语句  char.remove删除某一条数据 MarioChar.remove把整段数据删除  MarioChar.findOneAndRemove找到某条数据并删除(最常用)
    it('deleting data from db', function () {
        MarioChar.findOneAndRemove({
            // MarioChar.findOneAndDelete({
            name: 'Mario'
        }).then(function (result) {
            assert(result === null);
        }).catch(function (err) {
            console.log(err)
        })
    });
}); */