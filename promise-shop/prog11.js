
function all(getPromise1,getPromise2){
    return new Promise(function (fulfill, reject) {
    let counter=0;
    let data = [];
    getPromise1.then((val) => {
     counter = counter + 1;
     data[0] =  val;
     if(counter >= 2){
     fulfill(data);   
     }
    });
    getPromise2.then((val) => {
        counter = counter + 1;
        data[1] = val;
        if(counter >= 2){
            fulfill(data);
        }
        
        });
    });
    // let b = new Promise((resolve,reject)=>{

    // });

    //console.log(counter);
    // getPromise1.resolve (counter = counter + 1);
    // getPromise2.resolve (counter = counter + 1);
    // if(counter==2){
    //     b.resolve([getPromise1,getPromise2]);
    // }
    //return b;
}

// let getPromise1 = new Promise(function(a,b){
//     a();
// });
// let getPromise2 = new Promise(function(a,b){
//     a();
// });
//let getPromise2 
all(getPromise1(),getPromise2()).then(console.log);
