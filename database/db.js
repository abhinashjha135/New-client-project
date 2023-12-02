const mongoose = require('mongoose');


const mongoURI = 'mongodb://127.0.0.1:27017/Task-manager';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

};

mongoose
.connect(mongoURI, options)
.then(() =>{
   

})
.catch((error) =>{
    console.error('Error connecting to Mongodb', error);
})
