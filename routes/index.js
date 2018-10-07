var express = require('express');
var router = express.Router();
const sqlWrapper = require('../Database/sqlWrapper');

/* GET home page. */
router.post('/test', function(req, res, next) {
    req.body = req.body.data;
    console.log("body is ",req.body);
    let query = `insert into volunteer (fname,lname,email,password,address,phoneNumber,skill,organiation) values ('${req.body.fname}','${req.body.lname}','${req.body.email}','${req.body.pass}','${req.body.addr}','${req.body.phone}','${req.body.skill}','${req.body.organiation}')`;
  sqlWrapper.executeQuery([query]).then(result=>{
      console.log("the data is ",result);
      res.json({'status':true,'data':result});
  }).catch(error=>{

  });
});

router.post('/getVol', function (req, res, next) {
  let query = `select * from volunteer where recruited = 'N';`;
  sqlWrapper.executeQuery([query]).then(result=>{
      res.json({status:true,data:result[0]});
  }).catch(error=>{
    console.log("error is ",error);
  });
});

router.post('/getVolAll', function (req, res, next) {
  let query = `select * from volunteer;`;
  sqlWrapper.executeQuery([query]).then(result=>{
      res.json({status:true,data:result[0]});
  }).catch(error=>{
    console.log("error is ",error);
  });
});

router.post('/orgSignUp', function (req, res, next) {
    console.log("the params are ",req.body);
    /*sqlWrapper.executeQuery([query]).then(result=>{
        res.json({status:true,data:result[0]});
    }).catch(error=>{
        console.log("error is ",error);
    });*/
});

router.post('/getOrg', function (req, res, next) {
    let query = `select * from organization;`;
    sqlWrapper.executeQuery([query]).then(result=>{
        res.json({status:true,data:result[0]});
    }).catch(error=>{
        console.log("error is ",error);
    });
});

module.exports = router;
