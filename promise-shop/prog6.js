var promise = new Promise(function(f,r){
    r(new Error("Error"));
});

promise.catch(function (v){
    console.log(v.message);
}); 

var p = Promise.resolve('Resolve');