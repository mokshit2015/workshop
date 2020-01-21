// function first(){
//     var p = new Promise(function(resolve,reject){
//         resolve("6f5d07ebfce8a00de1c3173c4302ebd05b5f61d4");
//     });
//     return p;
// }

// function second(message){
//     var promise = new Promise(function (resolve,reject){
//         setTimeout(function (){
//             resolve(message);    
//         },500);
        
//     });
//     return promise;
// }

// first().then(function (m){
//     return second(m);
// }).then(function (msg){
//     console.log(msg);
// });

var fPromise = first();

var sPromise = fPromise.then(function (val){
    return second(val);
});

sPromise.then(console.log);