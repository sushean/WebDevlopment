const fs = require('fs');

function myFun(){
    return new Promise(function(resolve)
    {
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}

async function newone(){
    let n = await myFun();
    console.log(n);
}

newone();