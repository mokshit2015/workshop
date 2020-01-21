function parsePromised(abc){
    var a = new Promise(function (resolve,reject){
        try{
            resolve(JSON.parse(abc));
        }
        catch (e){
            reject(e);
        }
    });
    return a;
}

parsePromised(process.argv[2]).then(null,function(error){
    console.log(error.message);
});