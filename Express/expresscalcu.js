const express = require("express")
const app = express();

function SumOfNum(n){
    let ans = 0;
    for(let i = 0;i<n;i++){
        ans += i;
    }
    return ans;
}

app.get("/", function(req,res){
    const n = req.query.m;
    const ans = SumOfNum(n);
    res.send(ans.toString());
});

app.listen(3000);