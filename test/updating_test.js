// 更新数据
const MarioChar = require('../models/mariochar');
const mocha = require('mocha');
const assert = require('assert');
describe('更新数据', function () {
    it('saving data', function () {
        var char = new MarioChar({
            name: 'MarioAdd',
            weight: 50
        });
        char.save().then(function (result) {
            assert(result.isNew === false);
        })
    });
    /* it('Update a data from db', function () {
        MarioChar.findOneAndUpdate({
            name: 'Mario'
        }, {
            name: 'Mahowa'
        }).then(function (result) {
            confirm.log(result)
            assert(result.name === 'Mahowa');
        })
    }); */
    // 操作语句有很多，这里只举例一种
    it('更新语句中的操作语句，自增', function () {
        MarioChar.findOneAndUpdate({
            name: 'MarioAdd'
        }, {
            $inc: {
                weight: 1 //weight:-1
            }
        }).then(function (result) {
            assert(result.weight == 51); //49
        })
    })
});
``