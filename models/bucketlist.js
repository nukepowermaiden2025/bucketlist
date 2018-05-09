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
    },
    delete: function(condition,cb){
        orm.delete("bucketlists",condition, (res)=>{
            cb(res);//The orm has the table since it is whatwe
            //are using to query the db, that is why I don't need
            //to pass it in the function above.
        });
    }

}

module.exports =  bucketItem;