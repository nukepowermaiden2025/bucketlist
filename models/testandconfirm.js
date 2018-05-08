 
 
 //bucketItem.selctAll
 selectAll: function(cb){
        orm.selectAll("bucketlists",(res)=>{
            cb(res);
        });
    }

    //orm.selectAll
    selectAll: (table,cb)=>{

        var query = "SELECT * FROM" +table+";";
        connection.query(query,(err,res)=>{
            if (err) throw err;
            cb(result)
        }) 
    }

//In this case of the ORM
//We first build an ORM that can be used multiple times
//Then we are able to take the information that we declare in the 
// new objects method "bucketItem" and the 
//We activate the orm function whenever we use it in the 
//function that we build.
//So basically it we pass a function the orm(object relational mapping)
//so that we can do our logic elsewhere. And once we get that result back
//via  calling the callback function.
