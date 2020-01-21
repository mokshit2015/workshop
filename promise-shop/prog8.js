function attachTitle(m){
    var msg =  'DR. ' + m;
    return msg;
}

// let promise = new Promise(function(fulfill,reject){
//     fulfill('MANHATTAN');
// });

// promise.then(function (msg){
//        return attachTitle(msg); 
// }).then(console.log);

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);