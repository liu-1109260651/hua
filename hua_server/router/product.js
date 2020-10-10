const express = require('express')
const pool = require('../pool')
const r = express.Router()
r.get('/detail',(req,res)=>{
  let cid = req.query.cid
  console.log(cid)
  let sql = 'select * from hua_details where lid=?'
  pool.query(sql,[cid],(err,result)=>{
    console.log(result)
    if(err) throw err;
    if(result.length!=0){
      res.send(result)
    }else{
      res.send('2')
    }
    
  })
})

r.get('/product',(req,res)=>{
  let sql = 'select * from hua_product'
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result)
    res.json(result)
  })
})

r.get('/banner',(req,res)=>{
  let sql = 'select * from hua_banner';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})

r.get('/search',(req,res)=>{
  let title = req.query.title;
  console.log(title)
  let sql = "select * from hua_product where title like '%" + title +"%'";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result)
    if(result.length != 0){
      res.send({massge:'查询成功',code:1,info:result})
    }else{
      res.send({massge:'查询失败',code:0})
    }
  })
})

module.exports = r;