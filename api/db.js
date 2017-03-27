// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017/tack-out');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});

const hotSerchSchema = new mongoose.Schema({
    "is_highlight": Number,
    "link": String,
    "search_word": String,
    "source": String,
    "type": Number,
    "url": String,
    "word": String 
});


/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    hotSerch: mongoose.model('hotSerch',hotSerchSchema)
};



// let newAccount = new Models.Login({
//     account : 'zxmzxm',
//     password : 'q759095332'
// });

// // 保存数据newAccount数据进mongoDB
// newAccount.save((err,data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('createAccount successed');
//     }
// });

Models.hotSerch.find((err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


// console.log('123123123');

module.exports = Models;