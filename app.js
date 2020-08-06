var express = require("express")
var axios = require('axios');
const qs = require('qs');
var app = express();

app.listen(4200,()=>{
    console.log("server starts in port 4200")
})

app.get('/',(req,res)=>{
    //解析授权码
    var code = req.query.code
    if(!code){
        res.send("hello");
        return;
    }
    //携带授权码 去请求token
    var params = {"client_id":"dc-njuics-cn","client_secret":"dcos-nap","code":code,"grant_type":"authorization_code","redirect_uri":"http://localhost:4200","scope":"true"}
    // console.log(params);
    axios.post("http://localhost:3000/oauth",qs.stringify(params),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((result)=>{
        console.log(result.data)
        //通过token获取用户信息
        res.send("uname is "+result.data.user.username)
    })
  
})