const express = require('express');
const app = express();
const port = 3000;
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//get request for query and path param;

app.get('/user/:route_param', (req, res) => {

  const pathParam = req.params.route_param;
  const queryParam = req.query.query_param;


  const response = {

    path_param: pathParam,
    query_param: queryParam,
   
                   };

  res.json(response);
});




//post request for getting json and returning an array;

const users=[
  
  {  
     name:'arun',
      id:1   
  }
  ,

  {
      name:'gagan',
      id:2
  }
  ,
  {
    name:'varun',
    id:3
  }


]






app.post('/users',(req,res)=>{

     const data=req.body;
     


     const present=users.some(ele=>{

      return ele.name == data.name
    
     })

      //  console.log(users);   for debugging purposes
      //  console.log(data);


     if(present || data.name === "")
     {
          res.send({error:"the user is already present or username is not provided"});
     }
     else{
         users.push(data);
         res.json(users);
         console.log("post operation is successful");
     }




})








app.listen(port, () => {
  console.log(`Server is running on port ${port} and waiting for request`);
});
