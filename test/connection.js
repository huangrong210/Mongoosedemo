// 连接数据库

// 1、引入mongoose模块
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// 2、连接mongodb
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 3、测试数据可是否连接成功
mongoose.connection.once('open', function () {
    console.log('数据库连接成功！');
}).on('error', function (error) {
    console.log('连接失败：', error);
})