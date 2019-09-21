/* // 通过ID获取数据
const MarioChar = require('../models/mariochar');
const mocha = require('mocha');
const assert = require('assert');
describe('存储数据', function () {
    // 用it创建任务
    var char;
    it('saving data', function () {
        // 准备需要存储的数据
        char = new MarioChar({
            name: 'Mario'
        });
        // 存储数据
        char.save().then(function (result) {
            // console.log(result.name);
            assert(result.isNew === false);
        })
    });
    it('finding data by id', function () {
        MarioChar.findOne({
            _id: char._id
        }).then(function (result) {
            console.log(result); //console.log(result._id);   console.log(result.name);
        })
    })
}); */