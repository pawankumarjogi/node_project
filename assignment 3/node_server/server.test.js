const mongoose=require('mongoose');
const supertest=require('supertest');

const app=require('./server.js');
const secret=require('./secret.js');


beforeAll(async  () =>{
    await mongoose.connect(secret);
})


afterAll(async ()=>{
    await mongoose.connection.close();
})




test("should return all users", async () => {
      const res = await supertest(app).get("/users");
      expect(res.statusCode).toBe(200);
       
    });


test("should create a user or throw error if present already",async()=>{
    const res=await supertest(app).post("/create").send({name :"san",age:35})
    expect(res.statusCode).toBe(201);
    
    
})

 
test("should change user name",async ()=>{
    const res=await supertest(app).patch("/update/64ed859fca600a047dd77663").send({name:"ajanta"});
    expect(res.statusCode).toBe(300);
    

})


