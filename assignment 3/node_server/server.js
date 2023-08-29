// //new project created for mongodb database connection inside file path /home/niveus/mongodb

// const express = require('express');
// const bodyparser=require('body-parser');
// const app = express();
// const port = 27017;
// const Mongoclient=require('mongodb').MongoClient;//NEEDED FOR MONGO CONNECTIONS;

// const secret=require('./secret.js');//its a URL
// // console.log(secret);  for debugging

// Mongoclient.connect(secret,(err,db)=>{
    
//     if(err){
//          console.log(err);
//     }
//     console.log("connected and closed");
   
//     db.close();
   
// })

// app.get('/user', (req, res) => {

//   res.send('<h1> response received</h1>');
//   console.log('api called');
// });

// app.listen(port,()=>{
//     console.log("server is listening");
// })








const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const url = require('./secret.js');
const mongoose=require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(con=>{

    console.log("connection success with database");
})


//user schema
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique : true
      
    },
    age: {
      type: Number,
      default: 10,
    },
  });

  
  const User = mongoose.model("User", UserSchema);





//getting list of user
app.get('/users',(req,res)=>{

  User.find().then(doc=>{ //here doc gives the all documents
    res.send(doc);
    console.log('get api called and document sent successfully');
  
  }).catch(err=>{
    res.status(500).send({error:err});
    console.log(err);
  })

})




//creating users
app.post('/create',(req,res)=>{

const testuser2=new User(req.body);

testuser2.save()

.then(doc=>{ //here doc is the new added document

  console.log(doc);
  console.log('document has been created');
  res.status(201).send(doc);

}).catch(err=>{
  console.log(err);
  res.status(500).send({error: err});
})


})




//updating users
app.patch('/update/:id',(req,res)=>{

  User.findByIdAndUpdate(req.params.id ,req.body,
    { 
      new:true,
      runValidators:true
    }).then(doc=>{
      console.log(doc);//here doc is the newly updated document by id
      console.log('document updated successfully');
      res.status(300).send(doc);
    }).catch(err=>{
      console.log('failed to update properties');
      console.log(err);
      res.status(500).send({error : err});
    })

   
})



app.listen(8080,()=>{
   console.log('server ready');
})



module.exports=app;



// User.find().then(doc=>{ //here doc gives the all documents
//   res.send(doc);
//   console.log('get api called and document sent successfully');

// }).catch(err=>{
//   res.send({error:err});
//   console.log(err);
// })
