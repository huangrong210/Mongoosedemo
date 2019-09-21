/* // 查询数据

const MarioChar = require('../models/mariochar');
const mocha = require('mocha');
const assert = require('assert');

// 测试时对当前测试的一个描述
describe('查找数据', function () {
    // 创建需要测试的任务
    // 回调方法里面可以再返回一个方法done（done可以当成形参，命名随意），done可以把你想要的结果打印出来
    // it('finding data', function (done) {
    it('finding data', function () {
        //    MarioChar.find({})  //find查找  给空对象{} 表示查找所有
        MarioChar.findOne({
            name: 'Mario'
        }).then(function (result) {
            // console.log(result.name);
            // console.log(result._id.toString());
            // done(); //表示当前测试已结束，需要把当前数据要打印展示出来
        });
    });
}); */