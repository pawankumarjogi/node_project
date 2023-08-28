
const express = require('express');
const app = express();
const port = 3000;
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//get request for query and path param;

app.get('/user/:route_param', (req, res) => {

  console.log('get request is called with the specified query and path param\n');

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


  console.log('post request has been called');

     const newUser=req.body;
     
     console.log("data before posting\n")
     console.log(users)


     const isPresent=users.some(ele=>{//to find already existing users

      return ele.name == newUser.name
    
     })

      //  console.log(users);   for debugging purposes
      //  console.log(newUser);


     if(isPresent || newUser.name === "")
     {
          res.send({error:"the user is already present or username is not provided"});
          console.log('error : the user is already present or username is not provided\n');
     }
     else{
         users.push(newUser);
         res.json(users);
         console.log("post operation is successful\n");
         console.log(users);
     }




})








app.listen(port, () => {
  console.log(`Server is running on port ${port} and waiting for request\n`);
});

