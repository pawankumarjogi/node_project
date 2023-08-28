
let val1=Math.ceil(Math.random()*10);

const validvalue=new Promise((resolve,reject)=>{

    if(val1>5)
    {
        resolve("the functionality has been executed successfully");
    }
    else{
        reject("the request could not be processed");
    }

})


validvalue.then(result=>
    {
          console.log(result);
    }).catch(Error=>
    {
            console.log(Error);
    })



    
