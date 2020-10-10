const express = require('express');
const pool = require('../pool.js');
const r = express.Router();
r.get('/login',(req,res)=>{
  var _phone = req.query.phone;
  var _upwd = req.query.upwd;
  console.log(_phone,_upwd)
  var sql = 'select * from hua_user where phone= ? and upwd= ?';
  pool.query(sql,[_phone,_upwd],(err,result)=>{
    if(err) throw err;
    // res.header('Access-Control-Allow-Origin','*')
    console.log(result)
    if(result.length>0){
      res.json(result);
    }else{
      res.send("0")
    }
  })
})

r.get('/reg',(req,res)=>{
  let obj = req.query;
  let sql = 'select email,phone from hua_user where phone=? or email=?';
  pool.query(sql,[obj.phone,obj.email],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.json(result)
    }else{
      pool.query('insert into hua_user set ?',[obj],(err,res)=>{
        if(err) throw err
        console.log(res)
      })
    }
  })
})
module.exports = r