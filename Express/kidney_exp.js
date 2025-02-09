const express = require("express");
const app = express();

app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}];

app.get("/",function(req,res){
    const Johnkidneys = users[0].kidneys;
    const NumOfKidneys = Johnkidneys.length;
    let HealthyKidneys = 0;
    for(let i = 0 ; i<NumOfKidneys;i++)
    {
        if(Johnkidneys[i].healthy){
            HealthyKidneys++;
        }
    }
    const UnhealtyKidneys = NumOfKidneys - HealthyKidneys;
    res.json({
        NumOfKidneys,
        HealthyKidneys,
        UnhealtyKidneys
    });
});

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg : "Done!"
    });
});

app.put("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        for (let i = 0 ; i < users[0].kidneys.length;i++ ){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg: "No Unhealty Kidney Present"
        })
    }
    
});

app.delete("/",function(req,res){

    if(isThereAtleastOneUnhealthyKidney()){
        let newkidneys = [];
    for (let i = 0 ; i < users[0].kidneys.length;i++ ){
        if(users[0].kidneys[i].healthy)
            newkidneys.push({
                healthy : true
        })
    }
    users[0].kidneys=newkidneys;
    res.json({});
    }
    else{
        res.status(411).json({
            msg: "No Unhealty Kidney Present"
        })
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys. length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney   
}

app.listen(3000);