var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("<html><body>Portal de notícias</html></body>")
});
app.get('/tecnologia',function(req,res){
	res.send("<html><body>Notícias de tecnologia</html></body>")
});

app.listen(3000,function(){
  console.log("rodando");
});