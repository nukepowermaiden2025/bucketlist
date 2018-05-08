var orm  = require("./../config/orm.js");

var bucketItem ={
    all: function(cb){
        orm.all("bucketlists",(res)=>{
            cb(res);
        });
    },
    create:function(cols,vals,cb){
        orm.create("bucketlists",cols,vals, (res)=>{
            cb(res);
        });
    },
    update: function(objColVals, condition,cb){
        orm.update("bucketlists",objColVals,condition, (res)=>{
            cb(res);
        });
    }

}

module.exports =  bucketItem;