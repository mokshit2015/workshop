function alwaysThrows(){
     throw new Error("OH NOES");
}

function iterate(a){
    
    console.log(a);
    return a+1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.catch((v)=>{
    console.log(v.message);
});