const express = require('express');
const redis = require('redis');

const app = express();
const PORT = 3000;

// Redis client setup
const redisClient = redis.createClient();

redisClient.connect().then(()=>{
    console.log("Redis connected");
})

// API to fetch data
app.get('/data', async (req, res) => {
    redisClient.get("mnd").then(async(ress)=>{
  if(ress){    //if response menas her data 
    res.json(ress);
  }
  else{
    try{
        const response=await fetch('https://reqres.in/api/users?page=2')
        const data=await response.json();
        console.log(data);
        // redisClient.set("mnd",JSON.stringify(data));
        redisClient.setex("mnd", 60, JSON.stringify(data)); // 60 seconds TTL
        res.json(data);
    }catch(error){
        console.error("Error while fetcheing",error)
        res.status(500).send("fetch failed")
  }
  }
    })
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});