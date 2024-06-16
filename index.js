const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()


app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatapp'
})

db.connect((err) => {
    if(err) {
        console.log("error",err)
    }else {
        console.log("Connected Successfully")
    }
})

app.post("/users",(req,res) => {
    const query = "INSERT INTO data (`name`,`email`,`pass`) Values(?)";

    const values = [
        req.body.values.name,
        req.body.values.email,
        req.body.values.pass,
]
    console.log(values)
    db.query(query, [values], (err,result) => {
       if(err) {
        console.log(err);
       }
       else{
        console.log(result.insertId)
        return res.json(result.insertId)
        
       }

    })
    
})


app.listen(8080,() => {
    console.log("Post listen on 8080 port")
})
