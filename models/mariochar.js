// 集合collections 数据模型model

const mongoose = require('mongoose');

// 获取规范类
const Schema = mongoose.Schema;

// 规范数据格式
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// 创建数据模型 对象
const MarioChar = mongoose.model('Mario', MarioCharSchema);

// 抛出数据模型对象 以便其他文件可以引入（import）该文件
module.exports = MarioChar;