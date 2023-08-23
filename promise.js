
let val1=Math.ceil(Math.random()*10);

const promise1=new Promise((resolve,reject)=>{

    if(val1>5)
    {
        resolve("the functionality has been executed successfully");
    }
    else{
        reject("the request could not be processed");
    }

})


promise1.then(result=>
    {
          console.log(result);
    }).catch(Error=>
    {
            console.log(Error);
    })



    
