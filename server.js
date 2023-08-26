const express = require('express');
const cors = require('cors');
const dbOperation = require('../dbFiles/dbOperator');

// const API_Port = process.env.PORT || 5000;
// const app = express();



// let client;
// let session;
// app.use(cors());


// app.get('/api', function(req, res){
//     console.log('called');
//     res.send({result: 'Go away'})
// });
// app.get('/hello', function(req, res){
//     console.log('called');
//     res.send({result: 'Hello'})
// })

// app.listen(API_Port, ()=> console.log(`listening on port ${API_PORT}`));


dbOperation.getStudents().then(res=>{
    console.log(res);
})