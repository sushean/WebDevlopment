const fs = require('fs');

function susheanFun(){
    console.log("inside my function");
    return new Promise(function(resolve){
        console.log("Inside Promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    });
}

function Ondone(data)
{
    console.log(data);
}

let a = susheanFun();
a.then(Ondone);