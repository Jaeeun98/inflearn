const mongoose = require('mongoose');  //mongoose 가져오기
const userSchema = mongoose.Schema({  //스키마 생성
    name : {
        type : String,
        maxlength : 50 
    },
    email : {
        type : String,
        trim : true,  //space를 없애주는 역할
        unique : 1  //유니크하게, 즉 똑같은 이메일은 쓰지 못하도록
    },
    password : {
        type : String,
        minlength : 5
    },
    lastName : {
        type : String,
        maxlength : 50
    },
    role : {
        //user 중 관리자가 될수도 있고 아닐수도 있고, 관리자면 유저들을 관리할 수 있또록
        type : Number,
        default : 0  //role을 임의로 지정하지 않으면 0이다.
    },
    image : String,
    token : {
        //토큰을 이용해서 유효성을 관리
        type : String
    },
    tokenExp : {
        //토큰을 사용할 수 있는 기간
        type : Number
    }
})

const User = mongoose.model('User', userSchema);  //모델 생성
module.exports = {User};