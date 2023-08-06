var mysql=require('mysql');//khai bao thu vien
var con=mysql.createConnection({//khai bao thong tin server
    host:"sql.freedb.tech",
    user:"freedb_hungnq",
    password:"@9hc%!U9jW7Hs!k",
    database: "freedb_hungnq"
});
//ket noi
con.connect((err)=>{
    if(err) throw err;
    con.query("select * from sinhvien",(err,result,fields)=>{
        if(err) throw err;
        console.log(JSON.stringify(result));
    });
});
//upload API len heroku