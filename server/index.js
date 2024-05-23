const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const cookieSession = require('cookie-session')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


const app = express()
const port = 3001

app.use(cors({
    origin: ['http://localhost:5173'],
    methods:["POST","GET",],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 3600*1000
    }
}))

const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"myhomeshops"
});

db.connect(function(err){
    if(err){
        console.log(err) // ถ้าหากมี Error ให้ Console.log Error ออกมา 
    }else{
        console.log("Connected to Database!") // ถ้าไม่มี Error ให้ console.log ว่า Connected
    }
})

app.get('/',(req,res)=>{
    if(req.session.username){
        return res.json({valid: true, username : req.session.username})
    }else{
        return res.json({valid: false})
    }
})

app.post('/register', (req, res)=>{
    const id = req.body.id;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    const sql = "INSERT INTO users (id,email,username,password,role) VALUES (?,?,?,?,?)";

    db.query(sql,[id,email,username,password,role],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("value inserted");
        }
    })
})

app.post('/login',(req,res) =>{
    const username = req.body.username
    const password = req.body.password
    const sql = "SELECT * FROM users WHERE username = ? and password = ?"

    
    db.query(sql,[username,password],(err,result)=>{
        if(err) return res.json({Message:"Error in Server!"})
        if(result.length > 0){
            req.session.username = result[0].username;
            return res.json({Login: true , username:req.session.username})
        }else{
            return res.json({Login: false})
        }
    })
})

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to log out' });
      }
      res.clearCookie('connect.sid'); // ลบ cookie ที่ใช้เก็บ session ID
      res.json({ success: true });
    });
  });

app.get('/read', (req ,res)=>{
    db.query("SELECT * FROM `shops`",(err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})

app.listen(port,() =>{
    console.log(`Server is running on ${port}`)
} )