step1:运行授权服务器
下载 https://github.com/kunyashaw/oauth2-server
node serve.js

step2: 运行本服务器（充当第三方服务）
 node app.js

 step3: 浏览器访问
 http://localhost:3000/?client_id=dc-njuics-cn&response_type=code&redirect_uri=http://localhost:4200