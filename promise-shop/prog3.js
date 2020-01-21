require('es6-promise');
//  var promise = new Promise(function (fulfill, reject) {
//         setTimeout(function(){
//             fulfill('FULFILLED!');
//         },300);
//     });

//     promise.then(function (value){
//         console.log(value);
//     });

    
    var promise = new Promise(function (fulfill, reject) {
        setTimeout(function(){
            reject(new Error('REJECTED!'));
        },300);
      });
      
      function onReject (error) {
                console.log(error.message);
      }

      promise.then(null,onReject);
      
    // promise.catch(function(v){
    //     console.log(v.message);
    // });
  