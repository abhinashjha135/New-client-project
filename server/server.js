const express = require('express');
const app = express();
require('../database/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const morgan = require('morgan');
const User=require("../database/model/user.model")
const taskRouter = require('./routes/taskRoutes');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);
app.post("/auth/register",async(req,resp)=>{
	let user= new User(req.body);
	let result=await user.save();
	resp.send(result);
})
const port = 4000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});
app.get("/",(req,resp)=>{
	resp.send(
		"fine"
	)
})