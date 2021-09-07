const express = require('express')  //express 모듈 가져오기
const app = express()  //새로운 express app 만들기
const port = 5000  //port 번호 
const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://jaeeun:wodms4525-@clusterboilderplate.4rn2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));
console.log('dd');

// '/'디렉토리에 오면 hello world 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})